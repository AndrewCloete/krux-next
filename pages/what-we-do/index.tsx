import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import styles from "./index.module.css";

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div
        className={
          "h-[50vh] lg:h-[40vh] flex flex-col justify-center " +
          styles.bg_lounge
        }
      ></div>
      <div>
        <div className="mx-auto container px-4 lg:w-1/2 pt-10">
          <h1 className="text-4xl">What is KRUX?</h1>
          <div className="pt-4 font-sans text-slate-500">
            <div>
              Stellenbosch, a vibrant university town in the Western Cape of
              South Africa, is a place of extraordinary beauty; a confluence of
              intellect and imagination. It is a place that sifts, weighs, and
              unmasks the crux of our beliefs.
            </div>
            <br />
            <div>
              <b>KRUX</b> Christian Study Center is a community of Christian
              formation tucked in the heart of Stellenbosch. Launched by native
              South Africans JB and Corli Krohn in 2015, KRUX disciples young
              adults through theological education, mentoring, community, and a
              unique focus on the arts.
            </div>
          </div>
        </div>

        <div className="mx-auto container px-4 lg:w-1/2 pt-10">
          <h1 className="text-4xl">
            Why <i>Theological</i> discipleship?
          </h1>
          <div className="py-6 font-sans text-slate-500">
            <div>
              Each week, KRUX offers in-depth study of the Word, followed by
              lively discussion and robust engagement with the implications of a
              living theology in the real world.
            </div>
            <br />
            <div>
              One would expect this kind of theological discipleship to be a
              natural outflow of trusting in Christ and the coming of His
              Kingdom - the central act of God towards humanity. In reality,
              discipleship frequently finds itself marginalised in the Christian
              enterprise; with theology mostly banished to the seminary
              classroom, divorced from everyday life. The result is unschooled
              disciples and untested theologians.
            </div>
            <br />
            <div>
              In contrast, orthodox faith demands a Word-birthed and
              Word-centred spirituality generating and sustaining a Word-shaped
              community, yet well-versed in cultural literacy.
            </div>
            <br />
            <div className="bg-khaki px-4 py-3 rounded-md my-2 inline-block font-semibold text-xs">
              <a href="./what-we-do" className="text-white">
                Find a course
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            "mt-4 h-[50vh] lg:h-[30vh] flex flex-col justify-center " +
            styles.bg_window +
            " " +
            styles.bg_study
          }
        >
          <div className="container px-4 mx-auto font-sans text-slate-200 lg:w-2/3">
            “… theology is for doxology and devotion—that is, the praise of God
            and the practice of godliness. It should therefore be presented in a
            way that brings awareness of the divine presence. Theology is at its
            healthiest when it is consciously under the eye of God of whom it
            speaks, and when it is singing to his glory.” - James Packer
          </div>
        </div>

        <div className="mx-auto container px-4 lg:w-1/2 pt-10">
          <h1 className="text-4xl">Why Mentoring?</h1>
          <div className="py-6 font-sans text-slate-500">
            <div>
              Mentorship is intrinsic to the mission of KRUX. It is within the
              context of relationship that we step into the fullness of our
              personhood and redemption in Christ.
            </div>
            <br />
            <div>
              Mentoring at KRUX offers an ongoing encounter in faith-friendship
              that enables personal transformation in a uniquely powerful way.
              It is a constant and dynamic practice, including personal
              conversation, study and dialogue, counselling, seminars, and
              hospitality; responsive to each individual&apos;s needs and
              challenges, and resting on a continual theological equipping.
            </div>
            <br />
          </div>
        </div>
        <div
          className={
            "mt-4 h-[50vh] lg:h-[30vh] flex flex-col justify-center " +
            styles.bg_window +
            " " +
            styles.bg_mentor
          }
        >
          <div className="container px-4 mx-auto font-sans text-slate-200 lg:w-2/3">
            “God does not want me to mould others into the image that seems good
            to me, that is, into my own image. Instead, in their freedom from me
            God made other people in God&apos;s image. I can never know in
            advance how God&apos;s image should appear in others. That image
            always takes on a completely new and unique form.” - Dietrich
            Bonhoeffer
          </div>
        </div>

        <div className="mx-auto container px-4 lg:w-1/2 pt-10">
          <h1 className="text-4xl">Why Community?</h1>
          <div className="py-6 font-sans text-slate-500">
            <div>
              Christ the Hospitable One ate with &lsquo;sinners&rsquo; and
              welcomed outsiders. He always offers a place at the table in
              anticipation of the coming feast of the Kingdom of God. We believe
              a deep theological grounding can only be truly achieved within the
              context of community. At KRUX, a foundational stance of
              hospitality extends an invitation to enter into community though
              the ordinary. An open home, meals shared, time given and
              conversation work together to create a space in which to wrestle
              and to be challenged, to be known, and to be rooted in the Faith.
            </div>
          </div>
        </div>
        <div
          className={
            "mt-4 h-[50vh] lg:h-[30vh] flex flex-col justify-center " +
            styles.bg_window +
            " " +
            styles.bg_community
          }
        >
          <div className="container px-4 mx-auto font-sans text-slate-200 lg:w-2/3">
            “It will not be until the transforming power of God is demonstrated
            in each of us as a people gathered in Christ that true hospitality
            may begin to be shown; for hospitality is not simply what we do; nor
            is it a technique; hospitality is the gospel we embody. It is how we
            welcome &lsquo;the other&rsquo; in our own body, personally and
            communally.” Clarke Scheibe, Canadian L&apos;Abri
          </div>
        </div>

        <div className="mx-auto container px-4 lg:w-1/2 pt-10">
          <h1 className="text-4xl">Why Culture & the Arts?</h1>
          <div className="py-6 font-sans text-slate-500">
            <div>
              The Triune God acts continually in the transformation of culture.
              As image-bearers, our imaginative enterprises are to yield to the
              purposes of the Spirit.
            </div>
            <br />
            <div>
              At KRUX, we support the pivotal role of the Chrisitan community in
              the renewal of culture, especially through the redeeming faculties
              of the imaginative and the creative. The Arts has the means to
              clothe the human struggle with metaphor and lived experience, and
              beauty works an &lsquo;alchemy in the soul&rsquo; (Hans Urs Von
              Balthasar), which rouses a desire to re-appropriate the good and
              the true.
            </div>
            <br />
            <div>
              The Artists&apos; Gathering, an annual highlight, connects artists
              of faith from across Southern Africa, and has brought several
              international speakers to our shores. Our Artist-in-Residence
              provides further engagement with faith and the arts throughout the
              year.
            </div>
          </div>
        </div>
        <div
          className={
            "mt-4 h-[50vh] lg:h-[30vh] flex flex-col justify-center " +
            styles.bg_window +
            " " +
            styles.bg_dove
          }
        >
          <div className="container px-4 mx-auto font-sans text-slate-200 lg:w-2/3">
            “Art is a building block of civilization. A civilization that does
            not value its artistic expressions is a civilization that does not
            value itself.” Makoto Fujimura
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  // To implement nested layouts, see https://nextjs.org/docs/basic-features/layouts
  return <Layout>{page}</Layout>;
};

export default Page;
