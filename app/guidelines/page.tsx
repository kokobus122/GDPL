import Link from "next/link";
import React from "react";

const Guidelines = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <h1 className="text-content text-3xl my-3 font-bold text-center">
          Guidelines
        </h1>
        <h2 className="text-primary text-xl font-bold text-center">
          GDPL Rules
        </h2>
        <div className="flex flex-col gap-4 mx-auto my-3 w-full md:w-1/2">
          <p>
            Users of Mega Hack V8 are expected to follow the list of allowed
            hacks by{" "}
            <Link
              className="font-bold text-primary"
              href="https://docs.google.com/spreadsheets/d/1evE4nXATxRAQWu2Ajs54E6cVUqHBoSid8I7JauJnOzg/edit"
            >
              Demonlist
            </Link>
            .
          </p>
          <ul className="list-disc">
            Disallowed hacks include:
            <li>Noclip</li>
            <li>Startpos Switcher</li>
            <li>Physics Bypass</li>
            <li>
              Any disallowed hacks mentioned in{" "}
              <Link
                className="font-bold text-primary"
                href="https://docs.google.com/spreadsheets/d/1evE4nXATxRAQWu2Ajs54E6cVUqHBoSid8I7JauJnOzg/edit"
              >
                Demonlist
              </Link>
              .
            </li>
          </ul>
          <p>
            The GDPL team is subject to deny any submissions that include the
            usage of disallowed hacks. <br />
            If an illegitimate completion has been accepted, the submission
            should be reported through our Discord server.
          </p>
        </div>
        <h2 className="text-primary text-xl font-bold text-center">
          Submissions
        </h2>
        <div className="flex flex-col gap-4 mx-auto my-3 w-full md:w-1/2">
          <p>
            Submissions of user-made levels may be submitted through the{" "}
            <Link
              className="text-primary font-bold hover:underline"
              href="https://discord.gg/Y3u7VHTQ3R"
            >
              GDPL Discord
            </Link>
            .
          </p>
          <p>
            As of now, the only way to submit levels is through our official{" "}
            <Link
              className="text-primary font-bold hover:underline"
              href="https://discord.gg/Y3u7VHTQ3R"
            >
              Discord
            </Link>{" "}
            server. <br />
            Submitted levels have to be sent in by the original creator. <br />
            Review times may vary depending on staff available. <br />
            Duplicate submissions will be ignored and result in a temporary ban
            from submitting any future levels.
          </p>
        </div>
        <h2 className="text-primary text-xl font-bold text-center">
          Changelog
        </h2>
        <div className="flex flex-col gap-4 mx-auto my-3 w-full md:w-1/2">
          <p>
            The changelog is used to document rule and guideline changes
            implemented by the GDPL team. Recent changes can be viewed through
            the home page. However, important changes may not always be
            documented on our website and it is therefore advised to join our{" "}
            <Link
              className="text-primary font-bold hover:underline"
              href="https://discord.gg/Y3u7VHTQ3R"
            >
              Discord
            </Link>{" "}
            server to not miss out on necessary updates.{" "}
          </p>
          <h2 className="text-lg italic">Update v1.0 [2023-12-30]</h2>
          <ul className="list-disc">
            <li>GDPL Released</li>
            <li>Platformer List</li>
            <li>Progression List (W.I.P)</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Guidelines;
