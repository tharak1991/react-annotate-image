// @flow

import React from "react"
import classnames from "classnames"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  "@keyframes borderDance": {
    from: { strokeDashoffset: 0 },
    to: { strokeDashoffset: 100 }
  },
  highlightBox: {
    transition: "opacity 500ms",
    "&:not(.highlighted)": {
      opacity: 0
    },
    "&:not(.highlighted):hover": {
      opacity: 0.6
    },
    "& path": {
      vectorEffect: "non-scaling-stroke",
      strokeWidth: 2,
      stroke: "#FFF",
      fill: "none",
      strokeDasharray: 5,
      animationName: "$borderDance",
      animationDuration: "4s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
      animationPlayState: "running"
    }
  }
})

export default ({
  mouseEvents,
  dragWithPrimary,
  zoomWithPrimary,
  createWithPrimary,
  onBeginMovePoint,
  onSelectRegion,
  region: r,
  pbox
}: {
  mouseEvents: any,
  dragWithPrimary: boolean,
  zoomWithPrimary: boolean,
  createWithPrimary: boolean,
  onBeginMovePoint: Function,
  onSelectRegion: Function,
  region: any,
  pbox: { x: number, y: number, w: number, h: number }
}) => {
  const classes = useStyles()
  return (
    <svg
      key={r.id}
      className={classnames(classes.highlightBox, {
        highlighted: r.highlighted
      })}
      {...mouseEvents}
      {...(!zoomWithPrimary && !dragWithPrimary
        ? {
            onMouseDown: e => {
              if (
                !r.locked &&
                r.type === "point" &&
                r.highlighted &&
                e.button === 0
              ) {
                return onBeginMovePoint(r)
              }
              if (e.button === 0 && !createWithPrimary) return onSelectRegion(r)
              mouseEvents.onMouseDown(e)
            }
          }
        : {})}
      style={{
        ...(r.highlighted
          ? {
              pointerEvents: r.type !== "point" ? "none" : undefined,
              cursor: "grab"
            }
          : {
              cursor: !(zoomWithPrimary || dragWithPrimary || createWithPrimary)
                ? "pointer"
                : undefined,
              pointerEvents:
                zoomWithPrimary ||
                dragWithPrimary ||
                (createWithPrimary && !r.highlighted)
                  ? "none"
                  : undefined
            }),
        position: "absolute",
        left: pbox.x - 5,
        top: pbox.y - 5,
        width: pbox.w + 10,
        height: pbox.h + 10
      }}
    >
      <path
        d={`M5,5 L${pbox.w + 5},5 L${pbox.w + 5},${pbox.h + 5} L5,${pbox.h +
          5} Z`}
      />
    </svg>
  )
}
