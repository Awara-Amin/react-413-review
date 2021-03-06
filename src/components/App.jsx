import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
import Avo from "./Avo";

console.log(emojipedia);

function createEntry(eachEmoji) {
  return (
    <Entry
      key={eachEmoji.id}
      emoji={eachEmoji.emoji}
      name={eachEmoji.name}
      description={eachEmoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Avo title="Emojis and Their Meanings" />
      {/* <h1>
        <span>Emojis and Their Meanings</span>
      </h1> */}

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
        {/* <Entry
          id={emojipedia[0].id}
          emoji={emojipedia[0].emoji}
          name={emojipedia[0].name}
          meaning={emojipedia[0].meaning}
        /> */}
        {/* <Entry id={1} emoji={"ðª"} name={"Tense Biceps"} meaning={"hhhhhhhh"} /> */}
        {/* <Entry
          id={emojipedia[1].id}
          emoji={emojipedia[1].emoji}
          name={emojipedia[1].name}
          meaning={emojipedia[1].meaning}
        /> */}
        {/* <Entry
          id={emojipedia[2].id}
          emoji={emojipedia[2].emoji}
          name={emojipedia[2].name}
          meaning={emojipedia[2].meaning}
        /> */}

        {/* <Entry id={1} emoji={"ðª"} name={"Tense Biceps"} meaning={"hhhhhhhh"} /> */}

        {/* <Entry /> */}
        {/* <Entry /> */}

        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ðª
            </span>
            <span>Tense Biceps</span>
          </dt>
          <dd>
            âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
            used in connection with doing sports, e.g. at the gym.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ð
            </span>
            <span>Person With Folded Hands</span>
          </dt>
          <dd>
            Two hands pressed together. Is currently very introverted, saying a
            prayer, or hoping for enlightenment. Is also used as a âhigh fiveâ
            or to say thank you.
          </dd>
        </div> */}
        {/* <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              ð¤£
            </span>
            <span>Rolling On The Floor, Laughing</span>
          </dt>
          <dd>
            This is funny! A smiley face, rolling on the floor, laughing. The
            face is laughing boundlessly. The emoji version of âroflâ. Stands
            for ârolling on the floor, laughingâ.
          </dd>
        </div> */}
      </dl>
    </div>
  );
}

export default App;
