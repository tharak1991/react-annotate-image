// @flow

import React from "react"

import { storiesOf } from "@storybook/react"
import { action as actionAddon } from "@storybook/addon-actions"
import exampleImage from "../ImageCanvas/seves_desk.story.jpg"
import bikeImg1 from "./bike-pic.png"
import bikeImg2 from "./bike-pic2.png"

import Annotator from "./"

import { testRegions } from "../ImageCanvas/index.story"

storiesOf("Annotator", module)
  .add("Basic", () => (
    <Annotator
      onExit={actionAddon("onExit")}
      middlewares={[
        store => next => action => {
          actionAddon(action.type)(action)
          return next(action)
        }
      ]}
      labelImages
      regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
      regionTagList={["tag1", "tag2", "tag3"]}
      imageClsList={["Alpha", "Beta", "Charlie", "Delta"]}
      imageTagList={["tag1", "tag2", "tag3"]}
      images={[
        {
          src: exampleImage,
          name: "Seve's Desk",
          regions: testRegions
        },
        {
          src: "https://loremflickr.com/100/100/cars?lock=1",
          name: "Frame 0036"
        },
        {
          src: "https://loremflickr.com/100/100/cars?lock=2",
          name: "Frame 0037"
        },
        {
          src: "https://loremflickr.com/100/100/cars?lock=3",
          name: "Frame 0038"
        }
      ]}
    />
  ))
  .add("Shrunk Annotator (Test Fullscreen)", () => (
    <div style={{ padding: 100 }}>
      <Annotator
        onExit={actionAddon("onExit")}
        regionClsList={["Alpha", "Beta", "Charlie", "Delta"]}
        regionTagList={["tag1", "tag2", "tag3"]}
        middlewares={[
          store => next => action => {
            actionAddon(action.type)(action)
            return next(action)
          }
        ]}
        images={[
          {
            src: exampleImage,
            name: "Seve's Desk",
            regions: testRegions
          }
        ]}
      />
    </div>
  ))
  .add("Annotator w/o No Region Labels or Image Labels", () => (
    <Annotator
      onExit={actionAddon("onExit")}
      middlewares={[
        store => next => action => {
          actionAddon(action.type)(action)
          return next(action)
        }
      ]}
      images={[
        {
          src: exampleImage,
          name: "Seve's Desk",
          regions: testRegions
        }
      ]}
    />
  ))
  .add("Annotator with no enabled tools", () => (
    <Annotator
      onExit={actionAddon("onExit")}
      enabledTools={[]}
      showTags={false}
      middlewares={[
        store => next => action => {
          actionAddon(action.type)(action)
          return next(action)
        }
      ]}
      images={[
        {
          src: exampleImage,
          name: "Seve's Desk",
          regions: testRegions
        }
      ]}
    />
  ))
  .add("Bounding Box Annotator with output to console.log", () => (
    <Annotator
      onExit={out => {
        window.lastOutput = out
        console.log(out)
      }}
      taskDescription={`## Annotate Hands\nDraw a bounding box around each hand.`}
      enabledTools={["select", "create-box"]}
      regionClsList={["Hand", "Face"]}
      regionTagList={["Open Pinch", "Closed Pinch", "In Frame"]}
      showTags={false}
      images={[
        {
          src:
            "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame017.png",
          name: "Bounding Box Test",
          regions: []
        },
        {
          src:
            "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame001.png",
          name: "Bounding Box Test",
          regions: []
        }
      ]}
    />
  ))
  .add("Bounding Box Annotator with allowed area", () => (
    <Annotator
      taskDescription={`## Annotate Hands\nDraw a bounding box around each hand.`}
      enabledTools={["select", "create-box"]}
      regionClsList={["Hand", "Face"]}
      regionTagList={["Open Pinch", "Closed Pinch", "In Frame"]}
      showTags={false}
      allowedArea={{ x: 0.25, y: 0.25, w: 0.5, h: 0.5 }}
      images={[
        {
          src:
            "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame017.png",
          name: "Bounding Box Test",
          regions: []
        }
      ]}
    />
  ))
  .add("Car Annotation", () => (
    <Annotator
      onExit={actionAddon("onExit")}
      middlewares={[
        store => next => action => {
          actionAddon(action.type)(action)
          return next(action)
        }
      ]}
      labelImages
      regionClsList={["Car", "Sign", "Construction Barrier"]}
      regionTagList={["Moving", "Stopped", "Obstacle"]}
      imageClsList={["On Street", "Sidewalk", "Other"]}
      // imageTagList={["tag1", "tag2", "tag3"]}
      images={[
        {
          src: bikeImg1,
          name: "Frame 03021",
          regions: [
            {
              cls: "Car",
              color: "hsl(82,100%,50%)",
              h: 0.45921666772960146,
              w: 0.3932156342484836,
              x: 0.6302148980776354,
              y: 0.5559504689545722,
              type: "box",
              id: "8776160642957009",
              tags: ["Stopped"],
              highlighted: false,
              editingLabels: false
            },
            {
              cls: "Car",
              color: "hsl(264,100%,50%)",
              type: "box",
              id: "885140028730734",
              tags: ["Moving"],
              w: 0.2627711048576583,
              x: 0.20751775748638238,
              y: 0.5566583219431673,
              h: 0.268717618171478,
              highlighted: false,
              editingLabels: false
            },
            {
              cls: "Car",
              color: "hsl(127,100%,50%)",
              w: 0.033016094117647055,
              x: 0.5051247779336334,
              y: 0.5396378545840628,
              h: 0.03423999999999994,
              type: "box",
              id: "5952553512262024",
              tags: ["Stopped"],
              highlighted: false,
              editingLabels: false
            },
            {
              type: "box",
              x: 0.7847296794208894,
              y: 0.3635007199404308,
              w: 0.04871147880041349,
              h: 0.10995961095800888,
              highlighted: true,
              editingLabels: false,
              color: "hsl(268,100%,50%)",
              id: "5647593040225252",
              cls: "Sign"
            }
          ]
        },
        {
          src: bikeImg2,
          name: "Frame 03022",
          regions: [
            {
              type: "box",
              x: 0.12226982552783494,
              y: 0.5578947368421052,
              w: 0.3301518695958121,
              h: 0.33562583001232194,
              highlighted: false,
              editingLabels: false,
              color: "hsl(171,100%,50%)",
              id: "014393439034159128",
              cls: "Car",
              tags: ["Stopped"]
            },
            {
              type: "box",
              x: 0.5018477698901193,
              y: 0.5954194079501558,
              w: 0.07194249496837657,
              h: 0.06826906557009338,
              highlighted: false,
              editingLabels: false,
              color: "hsl(17,100%,50%)",
              id: "02954614542034717",
              cls: "Car",
              tags: ["Moving"]
            },
            {
              type: "box",
              x: 0.6483083881082046,
              y: 0.6217109311709718,
              w: 0.08786544324705947,
              h: 0.20450608002345438,
              highlighted: true,
              editingLabels: true,
              color: "hsl(337,100%,50%)",
              id: "9124138360972984",
              cls: "Construction Barrier",
              tags: ["Obstacle"]
            },
            {
              type: "box",
              x: 0.7628671305695606,
              y: 0.6299511028935285,
              w: 0.12734928166820647,
              h: 0.2689292407634438,
              highlighted: false,
              editingLabels: false,
              color: "hsl(89,100%,50%)",
              id: "5960600741979638",
              cls: "Construction Barrier"
            },
            {
              type: "box",
              x: 0.5871362440754417,
              y: 0.6232091442114366,
              w: 0.06562102723514573,
              h: 0.15281773012741662,
              highlighted: false,
              editingLabels: false,
              color: "hsl(326,100%,50%)",
              id: "7955287536996538",
              cls: "Construction Barrier"
            },
            {
              type: "box",
              x: 0.42943330004934643,
              y: 0.6054718359824862,
              w: 0.053210066743122564,
              h: 0.054984658299147116,
              highlighted: false,
              editingLabels: false,
              color: "hsl(66,100%,50%)",
              id: "49573139861381166",
              cls: "Car",
              tags: ["Stopped"]
            }
          ]
        }
      ]}
      onExit={out => {
        window.lastOutput = out
        console.log(JSON.stringify(out.images))
      }}
    />
  ))
