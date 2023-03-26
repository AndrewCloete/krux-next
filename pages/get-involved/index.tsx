import { useState, useRef } from "react";
import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import {
  ButtonPrimary,
  ButtonSecondary,
  TextInput,
  Checkbox,
  Modal,
} from "@/components/input";

import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { BackendService } from "@/lib/BackendService";

/**
 * Reference:
 * https://www.npmjs.com/package/@marsidev/react-turnstile
 * https://developers.cloudflare.com/turnstile/reference/testing/
 * https://nextjs.org/docs/basic-features/environment-variables
 */

type MailLists = {
  [key: string]: {
    name: string;
    id: string;
    state: boolean;
  };
};

// Get values using CLI
function initMailingLists(): MailLists {
  return {
    krux: {
      name: "Krux news, events and blog",
      id: "ffc3c9b27c",
      state: false,
    },
    artistGathering: {
      name: "Artist's Gathering News",
      id: "13229781f7",
      state: false,
    },
    krohn: {
      name: "Krohn's personal newsletter",
      id: "38954f6f5d",
      state: false,
    },
  };
}

const turnstileKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

type RegisterState =
  | "input"
  | "loading"
  | "success"
  | "already_registered"
  | "error";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [mailingLists, setMailingLists] = useState<MailLists>(
    initMailingLists()
  );
  const [registerState, setRegisterState] = useState<RegisterState>("input");
  const ref = useRef<TurnstileInstance>(null);

  const handleSubmit = async () => {
    const mailInterests = Object.values(mailingLists).reduce(
      (acc: { [key: string]: boolean }, l) => {
        acc[l.id] = l.state;
        return acc;
      },
      {}
    );
    console.log({ email, mailInterests });
    setRegisterState("loading");
    const backend = new BackendService();
    const result = await backend.register(
      { email, mailInterests },
      ref.current?.getResponse() || ""
    );
    switch (result) {
      case "ALREADY_REGISTERED":
        setRegisterState("already_registered");
        return;
      case "REGISTERED":
        setRegisterState("success");
        return;
      case "ERROR":
        setRegisterState("error");
        return;
    }
  };

  return (
    <>
      {registerState === "input" && (
        <div className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <TextInput
              id="email"
              placeHolder="Email"
              value={email}
              onChange={(e) => setEmail(e)}
            />
          </div>
          {Object.keys(mailingLists).map((key: string) => {
            return (
              <Checkbox
                key={key}
                text={mailingLists[key].name}
                value={mailingLists[key].state}
                onChange={(e) => {
                  const newList = {
                    ...mailingLists,
                    [key]: { ...mailingLists[key], state: e },
                  };
                  console.log(newList);
                  setMailingLists(newList);
                }}
              ></Checkbox>
            );
          })}
          <div className="my-2">
            <span className="pr-2">
              <ButtonPrimary label="Submit" onClick={handleSubmit} />
            </span>
            <ButtonSecondary
              label="Token test"
              onClick={() => {
                const response = ref.current?.getResponse();
                console.log(response);
              }}
            />
          </div>
          <Turnstile
            ref={ref}
            siteKey={turnstileKey}
            options={{ theme: "light" }}
          />
        </div>
      )}
      {registerState === "loading" && "Loading..."}
      {registerState === "success" && (
        <>
          <p>Thank you!</p>
          <p> Please check your email to confirm your registration.</p>
        </>
      )}
      {registerState === "already_registered" && "Already registered"}
      {registerState === "error" &&
        "Whoops! Something unexpected happened. Please try again later or contact us at info@krux.africa."}
    </>
  );
}

function PayFastForm(props: { formHtml: string }) {
  return (
    <form action="https://sandbox.payfast.co.za/eng/process" method="post">
      <div dangerouslySetInnerHTML={{ __html: props.formHtml }}></div>
      <input
        type="submit"
        value="Pay Now"
        className="bg-khaki hover:bg-dkhaki text-white font-bold py-2 px-4 border border-dkhaki rounded"
      ></input>
    </form>
  );
}

function BecomeAPatronForm() {
  const [email, setEmail] = useState("");
  const [patronPayOpen, setPatronPayOpen] = useState(false);
  const [patronPayFormContent, setPatronPayFormContent] =
    useState("<div></div>");
  const ref = useRef<TurnstileInstance>(null);

  const handleSubmit = async () => {
    const backend = new BackendService();
    const result = await backend.getMembershipFormHtml(
      { email },
      ref.current?.getResponse() || ""
    );
    if (!result.html) {
      console.error(result);
      return;
    }
    setPatronPayFormContent(result.html);
    setPatronPayOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <p>
          You need to be registered to become a patron. Verify your email here.
        </p>
        <div className="mb-4">
          <TextInput
            id="email"
            placeHolder="Email"
            value={email}
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div className="my-2">
          {!patronPayOpen && (
            <>
              <span className="pr-2">
                <ButtonPrimary label="Verify" onClick={handleSubmit} />
              </span>
              <ButtonSecondary label="Token test" onClick={async () => {}} />
            </>
          )}
          {patronPayOpen && <PayFastForm formHtml={patronPayFormContent} />}
        </div>
        <Turnstile
          ref={ref}
          siteKey={turnstileKey}
          options={{ theme: "light" }}
        />
      </div>
    </>
  );
}

const Page: NextPageWithLayout = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [patronFormOpen, setPatronFormOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="mx-auto">
          <div className="prose lg:prose-xl px-3">
            There are several ways you can get involved with Krux
            <br />
            <h2>Register</h2>
            <p>
              You can add yourself the the Krux mailing list by registering. By
              default you will not receive any periodicals or marketing emails,
              only key organisation communications. You can chose to opt in to
              selected mailing lists on the registration form.
            </p>
            <p>
              You can update your email preferences or unsubscribe completely at
              any time using the link below. We will never share your email
              address. We take your privacy very seriously.
            </p>
            <div className="my-2">
              <span className="mr-1">
                <ButtonPrimary
                  label="Register"
                  onClick={() => setRegisterOpen(true)}
                />
              </span>
              <span>
                <ButtonSecondary
                  label="Update preferences"
                  onClick={() => setRegisterOpen(true)}
                />
              </span>
            </div>
            <h2>Become a patron</h2>
            <p>
              You can become a patron of Krux for a year with a R500 donation.
              Patronage is our channel for committed individuals to help support
              and guide the organisation. Patrons also receive a few additional{" "}
              <a href="#">perks</a>. You can also read our{" "}
              <a href="#">manifesto</a>.
            </p>
            <p>
              To become a patron, you need to be registered. On confirmation of
              payment, you will be added to the Patron mailing list.
            </p>
            <div className="my-2">
              <ButtonPrimary
                label="Become a patron"
                onClick={async () => {
                  setPatronFormOpen(true);
                }}
              />
            </div>
            <h2>Donate</h2>
            <p>
              If you wish to simply make a financial donation to Krux, you can
              do so here. You do not need to be registered to donate.
            </p>
            <div className="my-2">
              <span className="mr-1">
                <ButtonPrimary label="Donate" onClick={() => {}} />
              </span>
              <span>
                <ButtonSecondary label="East Mountain" onClick={() => {}} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {registerOpen && (
        <Modal
          setOpenModal={(isOpen) => {
            setRegisterOpen(isOpen);
          }}
        >
          <RegisterForm />
        </Modal>
      )}
      {patronFormOpen && (
        <Modal
          setOpenModal={(isOpen) => {
            setPatronFormOpen(isOpen);
          }}
        >
          <BecomeAPatronForm />
        </Modal>
      )}
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
