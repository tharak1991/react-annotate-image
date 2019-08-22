// @flow

import React from "react"
import { makeStyles } from "@material-ui/styles"
import HeaderButton, { HeaderButtonContext } from "../HeaderButton"
import BackIcon from "@material-ui/icons/KeyboardArrowLeft"
import NextIcon from "@material-ui/icons/KeyboardArrowRight"
import SettingsIcon from "@material-ui/icons/Settings"
import HelpIcon from "@material-ui/icons/Help"
import FullscreenIcon from "@material-ui/icons/Fullscreen"
import ExitIcon from "@material-ui/icons/ExitToApp"
import HotkeysIcon from "@material-ui/icons/Keyboard"
import styles from "./styles"

const useStyles = makeStyles(styles)

type Props = {
  onHeaderButtonClick: string => any,
  title: string,
  inFullScreen?: boolean
}

export default ({ onHeaderButtonClick, title, inFullScreen }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.header}>
      <div className={classes.fileInfo}>{title}</div>
      <div className={classes.headerActions}>
        <HeaderButtonContext.Provider value={{ onHeaderButtonClick }}>
          <HeaderButton name="Prev" Icon={BackIcon} />
          <HeaderButton name="Next" Icon={NextIcon} />
          <HeaderButton name="Settings" Icon={SettingsIcon} />
          {/* <HeaderButton name="Help" Icon={HelpIcon} /> */}
          {inFullScreen ? (
            <HeaderButton name="Window" Icon={FullscreenIcon} />
          ) : (
            <HeaderButton name="Fullscreen" Icon={FullscreenIcon} />
          )}
          {/* <HeaderButton name="Hotkeys" Icon={HotkeysIcon} /> */}
          <HeaderButton name="Done" Icon={ExitIcon} />
        </HeaderButtonContext.Provider>
      </div>
    </div>
  )
}
