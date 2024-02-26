import { g as generateUtilityClasses, a as generateUtilityClass, r as reactExports, s as styled, B as ButtonBase, b as rootShouldForwardProp, c as capitalize, _ as _extends, d as alpha, e as resolveProps, u as useThemeProps, f as _objectWithoutPropertiesLoose$1, j as jsxRuntimeExports, h as clsx, i as composeClasses, k as Backdrop, M as Modal, P as Paper, l as useTheme, m as useId, F as Fade, n as getPath, T as Typography, o as useIsFocusVisible, p as useForkRef, q as getDefaultExportFromCjs, t as Box, R as React, C as Config, I as IconButton } from "./main-QwWeW35j.js";
function getButtonUtilityClass(slot) {
  return generateUtilityClass("MuiButton", slot);
}
const buttonClasses = generateUtilityClasses("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]);
const buttonClasses$1 = buttonClasses;
const ButtonGroupContext = /* @__PURE__ */ reactExports.createContext({});
const ButtonGroupContext$1 = ButtonGroupContext;
const ButtonGroupButtonContext = /* @__PURE__ */ reactExports.createContext(void 0);
const ButtonGroupButtonContext$1 = ButtonGroupButtonContext;
const _excluded$4 = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];
const useUtilityClasses$3 = (ownerState) => {
  const {
    color: color2,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, `${variant}${capitalize(color2)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, color2 === "inherit" && "colorInherit", disableElevation && "disableElevation", fullWidth && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${capitalize(size)}`],
    endIcon: ["endIcon", `iconSize${capitalize(size)}`]
  };
  const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const commonIconStyles = (ownerState) => _extends({}, ownerState.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, ownerState.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, ownerState.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
});
const ButtonRoot = styled(ButtonBase, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === "inherit" && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === "light" ? theme.palette.grey.A100 : theme.palette.grey[700];
  return _extends({}, theme.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: theme.transitions.duration.short
    }),
    "&:hover": _extends({
      textDecoration: "none",
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, ownerState.variant === "contained" && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    "&:active": _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${buttonClasses$1.focusVisible}`]: _extends({}, ownerState.variant === "contained" && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${buttonClasses$1.disabled}`]: _extends({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === "outlined" && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === "contained" && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === "text" && {
    padding: "6px 8px"
  }, ownerState.variant === "text" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, ownerState.variant === "outlined" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${alpha(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === "contained" && {
    color: theme.vars ? (
      // this is safe because grey does not change between default light/dark mode
      theme.vars.palette.text.primary
    ) : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === "contained" && ownerState.color !== "inherit" && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, ownerState.size === "small" && ownerState.variant === "text" && {
    padding: "4px 5px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "text" && {
    padding: "8px 11px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === "small" && ownerState.variant === "contained" && {
    padding: "4px 10px",
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === "large" && ownerState.variant === "contained" && {
    padding: "8px 22px",
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${buttonClasses$1.disabled}`]: {
    boxShadow: "none"
  }
});
const ButtonStartIcon = styled("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === "small" && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = styled("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
  }
})(({
  ownerState
}) => _extends({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === "small" && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /* @__PURE__ */ reactExports.forwardRef(function Button2(inProps, ref) {
  const contextProps = reactExports.useContext(ButtonGroupContext$1);
  const buttonGroupButtonContextPositionClassName = reactExports.useContext(ButtonGroupButtonContext$1);
  const resolvedProps = resolveProps(contextProps, inProps);
  const props = useThemeProps({
    props: resolvedProps,
    name: "MuiButton"
  });
  const {
    children,
    color: color2 = "primary",
    component = "button",
    className,
    disabled = false,
    disableElevation = false,
    disableFocusRipple = false,
    endIcon: endIconProp,
    focusVisibleClassName,
    fullWidth = false,
    size = "medium",
    startIcon: startIconProp,
    type,
    variant = "text"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$4);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = useUtilityClasses$3(ownerState);
  const startIcon = startIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /* @__PURE__ */ jsxRuntimeExports.jsx(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonRoot, _extends({
    ownerState,
    className: clsx(contextProps.className, classes.root, className, positionClassName),
    component,
    disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
    ref,
    type
  }, other, {
    classes,
    children: [startIcon, children, endIcon]
  }));
});
const Button$1 = Button;
function getDialogUtilityClass(slot) {
  return generateUtilityClass("MuiDialog", slot);
}
const dialogClasses = generateUtilityClasses("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]);
const dialogClasses$1 = dialogClasses;
const DialogContext = /* @__PURE__ */ reactExports.createContext({});
const DialogContext$1 = DialogContext;
const _excluded$3 = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
const DialogBackdrop = styled(Backdrop, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes,
    scroll: scroll2,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ["root"],
    container: ["container", `scroll${capitalize(scroll2)}`],
    paper: ["paper", `paperScroll${capitalize(scroll2)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && "paperFullWidth", fullScreen && "paperFullScreen"]
  };
  return composeClasses(slots, getDialogUtilityClass, classes);
};
const DialogRoot = styled(Modal, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
});
const DialogContainer = styled("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => _extends({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, ownerState.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
}));
const DialogPaper = styled(Paper, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, ownerState.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, ownerState.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !ownerState.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, ownerState.maxWidth === "xs" && {
  maxWidth: theme.breakpoints.unit === "px" ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.maxWidth && ownerState.maxWidth !== "xs" && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, ownerState.fullWidth && {
  width: "calc(100% - 64px)"
}, ownerState.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${dialogClasses$1.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
}));
const Dialog = /* @__PURE__ */ reactExports.forwardRef(function Dialog2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiDialog"
  });
  const theme = useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledbyProp,
    BackdropComponent,
    BackdropProps,
    children,
    className,
    disableEscapeKeyDown = false,
    fullScreen = false,
    fullWidth = false,
    maxWidth = "sm",
    onBackdropClick,
    onClose,
    open,
    PaperComponent = Paper,
    PaperProps = {},
    scroll: scroll2 = "paper",
    TransitionComponent = Fade,
    transitionDuration = defaultTransitionDuration,
    TransitionProps
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$3);
  const ownerState = _extends({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll: scroll2
  });
  const classes = useUtilityClasses$2(ownerState);
  const backdropClick = reactExports.useRef();
  const handleMouseDown = (event) => {
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = (event) => {
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = reactExports.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DialogRoot, _extends({
    className: clsx(classes.root, className),
    closeAfterTransition: true,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: _extends({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps)
    },
    disableEscapeKeyDown,
    onClose,
    open,
    ref,
    onClick: handleBackdropClick,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContainer, {
        className: clsx(classes.container),
        onMouseDown: handleMouseDown,
        ownerState,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogPaper, _extends({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: clsx(classes.paper, PaperProps.className),
          ownerState,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContext$1.Provider, {
            value: dialogContextValue,
            children
          })
        }))
      })
    }))
  }));
});
const Dialog$1 = Dialog;
function getLinkUtilityClass(slot) {
  return generateUtilityClass("MuiLink", slot);
}
const linkClasses = generateUtilityClasses("MuiLink", ["root", "underlineNone", "underlineHover", "underlineAlways", "button", "focusVisible"]);
const linkClasses$1 = linkClasses;
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color2) => {
  return colorTransformations[color2] || color2;
};
const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color2 = getPath(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = getPath(theme, `palette.${transformedColor}Channel`);
  if ("vars" in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }
  return alpha(color2, 0.4);
};
const _excluded$2 = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ["root", `underline${capitalize(underline)}`, component === "button" && "button", focusVisible && "focusVisible"]
  };
  return composeClasses(slots, getLinkUtilityClass, classes);
};
const LinkRoot = styled(Typography, {
  name: "MuiLink",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${capitalize(ownerState.underline)}`], ownerState.component === "button" && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return _extends({}, ownerState.underline === "none" && {
    textDecoration: "none"
  }, ownerState.underline === "hover" && {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  }, ownerState.underline === "always" && _extends({
    textDecoration: "underline"
  }, ownerState.color !== "inherit" && {
    textDecorationColor: getTextDecoration({
      theme,
      ownerState
    })
  }, {
    "&:hover": {
      textDecorationColor: "inherit"
    }
  }), ownerState.component === "button" && {
    position: "relative",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    // Reset
    WebkitAppearance: "none",
    // Reset
    "&::-moz-focus-inner": {
      borderStyle: "none"
      // Remove Firefox dotted outline.
    },
    [`&.${linkClasses$1.focusVisible}`]: {
      outline: "auto"
    }
  });
});
const Link = /* @__PURE__ */ reactExports.forwardRef(function Link2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiLink"
  });
  const {
    className,
    color: color2 = "primary",
    component = "a",
    onBlur,
    onFocus,
    TypographyClasses,
    underline = "always",
    variant = "inherit",
    sx
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$2);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = reactExports.useState(false);
  const handlerRef = useForkRef(ref, focusVisibleRef);
  const handleBlur = (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  };
  const handleFocus = (event) => {
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }
    if (onFocus) {
      onFocus(event);
    }
  };
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LinkRoot, _extends({
    color: color2,
    className: clsx(classes.root, className),
    classes: TypographyClasses,
    component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState,
    variant,
    sx: [...!Object.keys(colorTransformations).includes(color2) ? [{
      color: color2
    }] : [], ...Array.isArray(sx) ? sx : [sx]]
  }, other));
});
const Link$1 = Link;
function getToolbarUtilityClass(slot) {
  return generateUtilityClass("MuiToolbar", slot);
}
generateUtilityClasses("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const _excluded$1 = ["className", "component", "disableGutters", "variant"];
const useUtilityClasses = (ownerState) => {
  const {
    classes,
    disableGutters,
    variant
  } = ownerState;
  const slots = {
    root: ["root", !disableGutters && "gutters", variant]
  };
  return composeClasses(slots, getToolbarUtilityClass, classes);
};
const ToolbarRoot = styled("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableGutters && styles.gutters, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => _extends({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !ownerState.disableGutters && {
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}, ownerState.variant === "dense" && {
  minHeight: 48
}), ({
  theme,
  ownerState
}) => ownerState.variant === "regular" && theme.mixins.toolbar);
const Toolbar = /* @__PURE__ */ reactExports.forwardRef(function Toolbar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiToolbar"
  });
  const {
    className,
    component = "div",
    disableGutters = false,
    variant = "regular"
  } = props, other = _objectWithoutPropertiesLoose$1(props, _excluded$1);
  const ownerState = _extends({}, props, {
    component,
    disableGutters,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToolbarRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    ref,
    ownerState
  }, other));
});
const Tollbar = Toolbar;
var Component = {};
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text2, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text2;
    mark.ariaHidden = "true";
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text2);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text2);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text2);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text2);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
Object.defineProperty(Component, "__esModule", {
  value: true
});
Component.CopyToClipboard = void 0;
var _react = _interopRequireDefault(reactExports);
var _copyToClipboard = _interopRequireDefault(copyToClipboard);
var _excluded = ["text", "onCopy", "options", "children"];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols2 = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols2 = symbols2.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols2);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key2) {
      _defineProperty(target, key2, source[key2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key2) {
      Object.defineProperty(target, key2, Object.getOwnPropertyDescriptor(source, key2));
    });
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key2, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key2 = sourceSymbolKeys[i];
      if (excluded.indexOf(key2) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key2))
        continue;
      target[key2] = source[key2];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o3, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o4, p2) {
    o4.__proto__ = p2;
    return o4;
  };
  return _setPrototypeOf(o3, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o3) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o4) {
    return o4.__proto__ || Object.getPrototypeOf(o4);
  };
  return _getPrototypeOf(o3);
}
function _defineProperty(obj, key2, value) {
  if (key2 in obj) {
    Object.defineProperty(obj, key2, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key2] = value;
  }
  return obj;
}
var CopyToClipboard$1 = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits(CopyToClipboard2, _React$PureComponent);
  var _super = _createSuper(CopyToClipboard2);
  function CopyToClipboard2() {
    var _this;
    _classCallCheck(this, CopyToClipboard2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
      var _this$props = _this.props, text2 = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
      var elem = _react["default"].Children.only(children);
      var result = (0, _copyToClipboard["default"])(text2, options);
      if (onCopy) {
        onCopy(text2, result);
      }
      if (elem && elem.props && typeof elem.props.onClick === "function") {
        elem.props.onClick(event);
      }
    });
    return _this;
  }
  _createClass(CopyToClipboard2, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props;
      _this$props2.text;
      _this$props2.onCopy;
      _this$props2.options;
      var children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
      var elem = _react["default"].Children.only(children);
      return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
        onClick: this.onClick
      }));
    }
  }]);
  return CopyToClipboard2;
}(_react["default"].PureComponent);
Component.CopyToClipboard = CopyToClipboard$1;
_defineProperty(CopyToClipboard$1, "defaultProps", {
  onCopy: void 0,
  options: void 0
});
var _require = Component, CopyToClipboard = _require.CopyToClipboard;
CopyToClipboard.CopyToClipboard = CopyToClipboard;
var lib = CopyToClipboard;
function ccount(value, character) {
  const source = String(value);
  if (typeof character !== "string") {
    throw new TypeError("Expected character");
  }
  let count = 0;
  let index2 = source.indexOf(character);
  while (index2 !== -1) {
    count++;
    index2 = source.indexOf(character, index2 + character.length);
  }
  return count;
}
function ok$4() {
}
function unreachable() {
}
const asciiAlpha = regexCheck(/[A-Za-z]/);
const asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
const asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
function asciiControl(code2) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    code2 !== null && (code2 < 32 || code2 === 127)
  );
}
const asciiDigit = regexCheck(/\d/);
const asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
const asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
function markdownLineEnding(code2) {
  return code2 !== null && code2 < -2;
}
function markdownLineEndingOrSpace(code2) {
  return code2 !== null && (code2 < 0 || code2 === 32);
}
function markdownSpace(code2) {
  return code2 === -2 || code2 === -1 || code2 === 32;
}
const unicodePunctuation = regexCheck(new RegExp("\\p{P}|\\p{S}", "u"));
const unicodeWhitespace = regexCheck(/\s/);
function regexCheck(regex2) {
  return check;
  function check(code2) {
    return code2 !== null && code2 > -1 && regex2.test(String.fromCharCode(code2));
  }
}
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
const convert$2 = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(test) {
    if (test === null || test === void 0) {
      return ok$3;
    }
    if (typeof test === "function") {
      return castFactory$2(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory$2(test) : propsFactory$2(test);
    }
    if (typeof test === "string") {
      return typeFactory$2(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory$2(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert$2(tests[index2]);
  }
  return castFactory$2(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].apply(this, parameters))
        return true;
    }
    return false;
  }
}
function propsFactory$2(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory$2(all2);
  function all2(node2) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node2
    );
    let key2;
    for (key2 in check) {
      if (nodeAsRecord[key2] !== checkAsRecord[key2])
        return false;
    }
    return true;
  }
}
function typeFactory$2(check) {
  return castFactory$2(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory$2(testFunction) {
  return check;
  function check(value, index2, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index2 === "number" ? index2 : void 0,
        parent || void 0
      )
    );
  }
}
function ok$3() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}
function color$2(d) {
  return d;
}
const empty = [];
const CONTINUE$2 = true;
const EXIT$2 = false;
const SKIP$2 = "skip";
function visitParents$2(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is = convert$2(check);
  const step = reverse ? -1 : 1;
  factory2(tree, void 0, [])();
  function factory2(node2, index2, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node2 && typeof node2 === "object" ? node2 : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color$2(node2.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is(node2, index2, parents[parents.length - 1] || void 0)) {
        result = toResult$2(visitor(node2, parents));
        if (result[0] === EXIT$2) {
          return result;
        }
      }
      if ("children" in node2 && node2.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node2
        );
        if (nodeAsParent.children && result[0] !== SKIP$2) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child2 = nodeAsParent.children[offset];
            subresult = factory2(child2, offset, grandparents)();
            if (subresult[0] === EXIT$2) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult$2(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$2, value];
  }
  return value === null || value === void 0 ? empty : [value];
}
function findAndReplace(tree, list2, options) {
  const settings = options || {};
  const ignored = convert$2(settings.ignore || []);
  const pairs = toPairs(list2);
  let pairIndex = -1;
  while (++pairIndex < pairs.length) {
    visitParents$2(tree, "text", visitor);
  }
  function visitor(node2, parents) {
    let index2 = -1;
    let grandparent;
    while (++index2 < parents.length) {
      const parent = parents[index2];
      const siblings = grandparent ? grandparent.children : void 0;
      if (ignored(
        parent,
        siblings ? siblings.indexOf(parent) : void 0,
        grandparent
      )) {
        return;
      }
      grandparent = parent;
    }
    if (grandparent) {
      return handler(node2, parents);
    }
  }
  function handler(node2, parents) {
    const parent = parents[parents.length - 1];
    const find = pairs[pairIndex][0];
    const replace2 = pairs[pairIndex][1];
    let start = 0;
    const siblings = parent.children;
    const index2 = siblings.indexOf(node2);
    let change = false;
    let nodes = [];
    find.lastIndex = 0;
    let match = find.exec(node2.value);
    while (match) {
      const position = match.index;
      const matchObject = {
        index: match.index,
        input: match.input,
        stack: [...parents, node2]
      };
      let value = replace2(...match, matchObject);
      if (typeof value === "string") {
        value = value.length > 0 ? { type: "text", value } : void 0;
      }
      if (value === false) {
        find.lastIndex = position + 1;
      } else {
        if (start !== position) {
          nodes.push({
            type: "text",
            value: node2.value.slice(start, position)
          });
        }
        if (Array.isArray(value)) {
          nodes.push(...value);
        } else if (value) {
          nodes.push(value);
        }
        start = position + match[0].length;
        change = true;
      }
      if (!find.global) {
        break;
      }
      match = find.exec(node2.value);
    }
    if (change) {
      if (start < node2.value.length) {
        nodes.push({ type: "text", value: node2.value.slice(start) });
      }
      parent.children.splice(index2, 1, ...nodes);
    } else {
      nodes = [node2];
    }
    return index2 + nodes.length;
  }
}
function toPairs(tupleOrList) {
  const result = [];
  if (!Array.isArray(tupleOrList)) {
    throw new TypeError("Expected find and replace tuple or list of tuples");
  }
  const list2 = !tupleOrList[0] || Array.isArray(tupleOrList[0]) ? tupleOrList : [tupleOrList];
  let index2 = -1;
  while (++index2 < list2.length) {
    const tuple = list2[index2];
    result.push([toExpression(tuple[0]), toFunction(tuple[1])]);
  }
  return result;
}
function toExpression(find) {
  return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
}
function toFunction(replace2) {
  return typeof replace2 === "function" ? replace2 : function() {
    return replace2;
  };
}
const inConstruct = "phrasing";
const notInConstruct = ["autolink", "link", "image", "label"];
function gfmAutolinkLiteralFromMarkdown() {
  return {
    transforms: [transformGfmAutolinkLiterals],
    enter: {
      literalAutolink: enterLiteralAutolink,
      literalAutolinkEmail: enterLiteralAutolinkValue,
      literalAutolinkHttp: enterLiteralAutolinkValue,
      literalAutolinkWww: enterLiteralAutolinkValue
    },
    exit: {
      literalAutolink: exitLiteralAutolink,
      literalAutolinkEmail: exitLiteralAutolinkEmail,
      literalAutolinkHttp: exitLiteralAutolinkHttp,
      literalAutolinkWww: exitLiteralAutolinkWww
    }
  };
}
function gfmAutolinkLiteralToMarkdown() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct,
        notInConstruct
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct,
        notInConstruct
      }
    ]
  };
}
function enterLiteralAutolink(token) {
  this.enter({ type: "link", title: null, url: "", children: [] }, token);
}
function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token);
}
function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token);
  const node2 = this.stack[this.stack.length - 1];
  ok$4(node2.type === "link");
  node2.url = "http://" + this.sliceSerialize(token);
}
function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token);
}
function exitLiteralAutolink(token) {
  this.exit(token);
}
function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function findUrl(_, protocol, domain2, path2, match) {
  let prefix = "";
  if (!previous(match)) {
    return false;
  }
  if (/^w/i.test(protocol)) {
    domain2 = protocol + domain2;
    protocol = "";
    prefix = "http://";
  }
  if (!isCorrectDomain(domain2)) {
    return false;
  }
  const parts = splitUrl(domain2 + path2);
  if (!parts[0])
    return false;
  const result = {
    type: "link",
    title: null,
    url: prefix + protocol + parts[0],
    children: [{ type: "text", value: protocol + parts[0] }]
  };
  if (parts[1]) {
    return [result, { type: "text", value: parts[1] }];
  }
  return result;
}
function findEmail(_, atext, label2, match) {
  if (
    // Not an expected previous character.
    !previous(match, true) || // Label ends in not allowed character.
    /[-\d_]$/.test(label2)
  ) {
    return false;
  }
  return {
    type: "link",
    title: null,
    url: "mailto:" + atext + "@" + label2,
    children: [{ type: "text", value: atext + "@" + label2 }]
  };
}
function isCorrectDomain(domain2) {
  const parts = domain2.split(".");
  if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) {
    return false;
  }
  return true;
}
function splitUrl(url) {
  const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
  if (!trailExec) {
    return [url, void 0];
  }
  url = url.slice(0, trailExec.index);
  let trail2 = trailExec[0];
  let closingParenIndex = trail2.indexOf(")");
  const openingParens = ccount(url, "(");
  let closingParens = ccount(url, ")");
  while (closingParenIndex !== -1 && openingParens > closingParens) {
    url += trail2.slice(0, closingParenIndex + 1);
    trail2 = trail2.slice(closingParenIndex + 1);
    closingParenIndex = trail2.indexOf(")");
    closingParens++;
  }
  return [url, trail2];
}
function previous(match, email2) {
  const code2 = match.input.charCodeAt(match.index - 1);
  return (match.index === 0 || unicodeWhitespace(code2) || unicodePunctuation(code2)) && (!email2 || code2 !== 47);
}
function normalizeIdentifier(value) {
  return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
footnoteReference.peek = footnoteReferencePeek;
function gfmFootnoteFromMarkdown() {
  return {
    enter: {
      gfmFootnoteDefinition: enterFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
      gfmFootnoteCall: enterFootnoteCall,
      gfmFootnoteCallString: enterFootnoteCallString
    },
    exit: {
      gfmFootnoteDefinition: exitFootnoteDefinition,
      gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
      gfmFootnoteCall: exitFootnoteCall,
      gfmFootnoteCallString: exitFootnoteCallString
    }
  };
}
function gfmFootnoteToMarkdown() {
  return {
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["phrasing", "label", "reference"] }],
    handlers: { footnoteDefinition, footnoteReference }
  };
}
function enterFootnoteDefinition(token) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    token
  );
}
function enterFootnoteDefinitionLabelString() {
  this.buffer();
}
function exitFootnoteDefinitionLabelString(token) {
  const label2 = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok$4(node2.type === "footnoteDefinition");
  node2.label = label2;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteDefinition(token) {
  this.exit(token);
}
function enterFootnoteCall(token) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, token);
}
function enterFootnoteCallString() {
  this.buffer();
}
function exitFootnoteCallString(token) {
  const label2 = this.resume();
  const node2 = this.stack[this.stack.length - 1];
  ok$4(node2.type === "footnoteReference");
  node2.label = label2;
  node2.identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase();
}
function exitFootnoteCall(token) {
  this.exit(token);
}
function footnoteReference(node2, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit2 = state.enter("footnoteReference");
  const subexit = state.enter("reference");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  exit2();
  value += tracker.move("]");
  return value;
}
function footnoteReferencePeek() {
  return "[";
}
function footnoteDefinition(node2, _, state, info) {
  const tracker = state.createTracker(info);
  let value = tracker.move("[^");
  const exit2 = state.enter("footnoteDefinition");
  const subexit = state.enter("label");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      ...tracker.current(),
      before: value,
      after: "]"
    })
  );
  subexit();
  value += tracker.move(
    "]:" + (node2.children && node2.children.length > 0 ? " " : "")
  );
  tracker.shift(4);
  value += tracker.move(
    state.indentLines(state.containerFlow(node2, tracker.current()), map$2)
  );
  exit2();
  return value;
}
function map$2(line, index2, blank) {
  if (index2 === 0) {
    return line;
  }
  return (blank ? "" : "    ") + line;
}
const constructsWithoutStrikethrough = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
handleDelete.peek = peekDelete;
function gfmStrikethroughFromMarkdown() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: enterStrikethrough },
    exit: { strikethrough: exitStrikethrough }
  };
}
function gfmStrikethroughToMarkdown() {
  return {
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: constructsWithoutStrikethrough
      }
    ],
    handlers: { delete: handleDelete }
  };
}
function enterStrikethrough(token) {
  this.enter({ type: "delete", children: [] }, token);
}
function exitStrikethrough(token) {
  this.exit(token);
}
function handleDelete(node2, _, state, info) {
  const tracker = state.createTracker(info);
  const exit2 = state.enter("strikethrough");
  let value = tracker.move("~~");
  value += state.containerPhrasing(node2, {
    ...tracker.current(),
    before: value,
    after: "~"
  });
  value += tracker.move("~~");
  exit2();
  return value;
}
function peekDelete() {
  return "~";
}
function markdownTable(table, options = {}) {
  const align = (options.align || []).concat();
  const stringLength = options.stringLength || defaultStringLength;
  const alignments = [];
  const cellMatrix = [];
  const sizeMatrix = [];
  const longestCellByColumn = [];
  let mostCellsPerRow = 0;
  let rowIndex = -1;
  while (++rowIndex < table.length) {
    const row2 = [];
    const sizes2 = [];
    let columnIndex2 = -1;
    if (table[rowIndex].length > mostCellsPerRow) {
      mostCellsPerRow = table[rowIndex].length;
    }
    while (++columnIndex2 < table[rowIndex].length) {
      const cell = serialize(table[rowIndex][columnIndex2]);
      if (options.alignDelimiters !== false) {
        const size = stringLength(cell);
        sizes2[columnIndex2] = size;
        if (longestCellByColumn[columnIndex2] === void 0 || size > longestCellByColumn[columnIndex2]) {
          longestCellByColumn[columnIndex2] = size;
        }
      }
      row2.push(cell);
    }
    cellMatrix[rowIndex] = row2;
    sizeMatrix[rowIndex] = sizes2;
  }
  let columnIndex = -1;
  if (typeof align === "object" && "length" in align) {
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = toAlignment(align[columnIndex]);
    }
  } else {
    const code2 = toAlignment(align);
    while (++columnIndex < mostCellsPerRow) {
      alignments[columnIndex] = code2;
    }
  }
  columnIndex = -1;
  const row = [];
  const sizes = [];
  while (++columnIndex < mostCellsPerRow) {
    const code2 = alignments[columnIndex];
    let before = "";
    let after = "";
    if (code2 === 99) {
      before = ":";
      after = ":";
    } else if (code2 === 108) {
      before = ":";
    } else if (code2 === 114) {
      after = ":";
    }
    let size = options.alignDelimiters === false ? 1 : Math.max(
      1,
      longestCellByColumn[columnIndex] - before.length - after.length
    );
    const cell = before + "-".repeat(size) + after;
    if (options.alignDelimiters !== false) {
      size = before.length + size + after.length;
      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size;
      }
      sizes[columnIndex] = size;
    }
    row[columnIndex] = cell;
  }
  cellMatrix.splice(1, 0, row);
  sizeMatrix.splice(1, 0, sizes);
  rowIndex = -1;
  const lines = [];
  while (++rowIndex < cellMatrix.length) {
    const row2 = cellMatrix[rowIndex];
    const sizes2 = sizeMatrix[rowIndex];
    columnIndex = -1;
    const line = [];
    while (++columnIndex < mostCellsPerRow) {
      const cell = row2[columnIndex] || "";
      let before = "";
      let after = "";
      if (options.alignDelimiters !== false) {
        const size = longestCellByColumn[columnIndex] - (sizes2[columnIndex] || 0);
        const code2 = alignments[columnIndex];
        if (code2 === 114) {
          before = " ".repeat(size);
        } else if (code2 === 99) {
          if (size % 2) {
            before = " ".repeat(size / 2 + 0.5);
            after = " ".repeat(size / 2 - 0.5);
          } else {
            before = " ".repeat(size / 2);
            after = before;
          }
        } else {
          after = " ".repeat(size);
        }
      }
      if (options.delimiterStart !== false && !columnIndex) {
        line.push("|");
      }
      if (options.padding !== false && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) {
        line.push(" ");
      }
      if (options.alignDelimiters !== false) {
        line.push(before);
      }
      line.push(cell);
      if (options.alignDelimiters !== false) {
        line.push(after);
      }
      if (options.padding !== false) {
        line.push(" ");
      }
      if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) {
        line.push("|");
      }
    }
    lines.push(
      options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join("")
    );
  }
  return lines.join("\n");
}
function serialize(value) {
  return value === null || value === void 0 ? "" : String(value);
}
function defaultStringLength(value) {
  return value.length;
}
function toAlignment(value) {
  const code2 = typeof value === "string" ? value.codePointAt(0) : 0;
  return code2 === 67 || code2 === 99 ? 99 : code2 === 76 || code2 === 108 ? 108 : code2 === 82 || code2 === 114 ? 114 : 0;
}
function blockquote(node2, _, state, info) {
  const exit2 = state.enter("blockquote");
  const tracker = state.createTracker(info);
  tracker.move("> ");
  tracker.shift(2);
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map$1
  );
  exit2();
  return value;
}
function map$1(line, _, blank) {
  return ">" + (blank ? "" : " ") + line;
}
function patternInScope(stack, pattern) {
  return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
}
function listInScope(stack, list2, none) {
  if (typeof list2 === "string") {
    list2 = [list2];
  }
  if (!list2 || list2.length === 0) {
    return none;
  }
  let index2 = -1;
  while (++index2 < list2.length) {
    if (stack.includes(list2[index2])) {
      return true;
    }
  }
  return false;
}
function hardBreak(_, _1, state, info) {
  let index2 = -1;
  while (++index2 < state.unsafe.length) {
    if (state.unsafe[index2].character === "\n" && patternInScope(state.stack, state.unsafe[index2])) {
      return /[ \t]/.test(info.before) ? "" : " ";
    }
  }
  return "\\\n";
}
function longestStreak(value, substring) {
  const source = String(value);
  let index2 = source.indexOf(substring);
  let expected = index2;
  let count = 0;
  let max = 0;
  if (typeof substring !== "string") {
    throw new TypeError("Expected substring");
  }
  while (index2 !== -1) {
    if (index2 === expected) {
      if (++count > max) {
        max = count;
      }
    } else {
      count = 1;
    }
    expected = index2 + substring.length;
    index2 = source.indexOf(substring, expected);
  }
  return max;
}
function formatCodeAsIndented(node2, state) {
  return Boolean(
    state.options.fences === false && node2.value && // If there’s no info…
    !node2.lang && // And there’s a non-whitespace character…
    /[^ \r\n]/.test(node2.value) && // And the value doesn’t start or end in a blank…
    !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node2.value)
  );
}
function checkFence(state) {
  const marker = state.options.fence || "`";
  if (marker !== "`" && marker !== "~") {
    throw new Error(
      "Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`"
    );
  }
  return marker;
}
function code$1(node2, _, state, info) {
  const marker = checkFence(state);
  const raw = node2.value || "";
  const suffix = marker === "`" ? "GraveAccent" : "Tilde";
  if (formatCodeAsIndented(node2, state)) {
    const exit3 = state.enter("codeIndented");
    const value2 = state.indentLines(raw, map);
    exit3();
    return value2;
  }
  const tracker = state.createTracker(info);
  const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
  const exit2 = state.enter("codeFenced");
  let value = tracker.move(sequence);
  if (node2.lang) {
    const subexit = state.enter(`codeFencedLang${suffix}`);
    value += tracker.move(
      state.safe(node2.lang, {
        before: value,
        after: " ",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  if (node2.lang && node2.meta) {
    const subexit = state.enter(`codeFencedMeta${suffix}`);
    value += tracker.move(" ");
    value += tracker.move(
      state.safe(node2.meta, {
        before: value,
        after: "\n",
        encode: ["`"],
        ...tracker.current()
      })
    );
    subexit();
  }
  value += tracker.move("\n");
  if (raw) {
    value += tracker.move(raw + "\n");
  }
  value += tracker.move(sequence);
  exit2();
  return value;
}
function map(line, _, blank) {
  return (blank ? "" : "    ") + line;
}
function checkQuote(state) {
  const marker = state.options.quote || '"';
  if (marker !== '"' && marker !== "'") {
    throw new Error(
      "Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`"
    );
  }
  return marker;
}
function definition(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("definition");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  value += tracker.move(
    state.safe(state.associationId(node2), {
      before: value,
      after: "]",
      ...tracker.current()
    })
  );
  value += tracker.move("]: ");
  subexit();
  if (
    // If there’s no url, or…
    !node2.url || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : "\n",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  exit2();
  return value;
}
function checkEmphasis(state) {
  const marker = state.options.emphasis || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`"
    );
  }
  return marker;
}
emphasis.peek = emphasisPeek;
function emphasis(node2, _, state, info) {
  const marker = checkEmphasis(state);
  const exit2 = state.enter("emphasis");
  const tracker = state.createTracker(info);
  let value = tracker.move(marker);
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: marker,
      ...tracker.current()
    })
  );
  value += tracker.move(marker);
  exit2();
  return value;
}
function emphasisPeek(_, _1, state) {
  return state.options.emphasis || "*";
}
function visit$2(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  if (typeof testOrVisitor === "function" && typeof visitorOrReverse !== "function") {
    test = void 0;
    visitor = testOrVisitor;
    reverse = visitorOrReverse;
  } else {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents$2(tree, test, overload, reverse);
  function overload(node2, parents) {
    const parent = parents[parents.length - 1];
    const index2 = parent ? parent.children.indexOf(node2) : void 0;
    return visitor(node2, index2, parent);
  }
}
const emptyOptions$2 = {};
function toString$1(value, options) {
  const settings = options || emptyOptions$2;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one$2(value, includeImageAlt, includeHtml);
}
function one$2(value, includeImageAlt, includeHtml) {
  if (node$1(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all$1(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all$1(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all$1(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$2(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node$1(value) {
  return Boolean(value && typeof value === "object");
}
function formatHeadingAsSetext(node2, state) {
  let literalWithBreak = false;
  visit$2(node2, function(node3) {
    if ("value" in node3 && /\r?\n|\r/.test(node3.value) || node3.type === "break") {
      literalWithBreak = true;
      return EXIT$2;
    }
  });
  return Boolean(
    (!node2.depth || node2.depth < 3) && toString$1(node2) && (state.options.setext || literalWithBreak)
  );
}
function heading(node2, _, state, info) {
  const rank = Math.max(Math.min(6, node2.depth || 1), 1);
  const tracker = state.createTracker(info);
  if (formatHeadingAsSetext(node2, state)) {
    const exit3 = state.enter("headingSetext");
    const subexit2 = state.enter("phrasing");
    const value2 = state.containerPhrasing(node2, {
      ...tracker.current(),
      before: "\n",
      after: "\n"
    });
    subexit2();
    exit3();
    return value2 + "\n" + (rank === 1 ? "=" : "-").repeat(
      // The whole size…
      value2.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(value2.lastIndexOf("\r"), value2.lastIndexOf("\n")) + 1)
    );
  }
  const sequence = "#".repeat(rank);
  const exit2 = state.enter("headingAtx");
  const subexit = state.enter("phrasing");
  tracker.move(sequence + " ");
  let value = state.containerPhrasing(node2, {
    before: "# ",
    after: "\n",
    ...tracker.current()
  });
  if (/^[\t ]/.test(value)) {
    value = "&#x" + value.charCodeAt(0).toString(16).toUpperCase() + ";" + value.slice(1);
  }
  value = value ? sequence + " " + value : sequence;
  if (state.options.closeAtx) {
    value += " " + sequence;
  }
  subexit();
  exit2();
  return value;
}
html.peek = htmlPeek;
function html(node2) {
  return node2.value || "";
}
function htmlPeek() {
  return "<";
}
image.peek = imagePeek;
function image(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const exit2 = state.enter("image");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  value += tracker.move(
    state.safe(node2.alt, { before: value, after: "]", ...tracker.current() })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function imagePeek() {
  return "!";
}
imageReference.peek = imageReferencePeek;
function imageReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("imageReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("![");
  const alt = state.safe(node2.alt, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(alt + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !alt || alt !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function imageReferencePeek() {
  return "!";
}
inlineCode.peek = inlineCodePeek;
function inlineCode(node2, _, state) {
  let value = node2.value || "";
  let sequence = "`";
  let index2 = -1;
  while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) {
    sequence += "`";
  }
  if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) {
    value = " " + value + " ";
  }
  while (++index2 < state.unsafe.length) {
    const pattern = state.unsafe[index2];
    const expression = state.compilePattern(pattern);
    let match;
    if (!pattern.atBreak)
      continue;
    while (match = expression.exec(value)) {
      let position = match.index;
      if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) {
        position--;
      }
      value = value.slice(0, position) + " " + value.slice(match.index + 1);
    }
  }
  return sequence + value + sequence;
}
function inlineCodePeek() {
  return "`";
}
function formatLinkAsAutolink(node2, state) {
  const raw = toString$1(node2);
  return Boolean(
    !state.options.resourceLink && // If there’s a url…
    node2.url && // And there’s a no title…
    !node2.title && // And the content of `node` is a single text node…
    node2.children && node2.children.length === 1 && node2.children[0].type === "text" && // And if the url is the same as the content…
    (raw === node2.url || "mailto:" + raw === node2.url) && // And that starts w/ a protocol…
    /^[a-z][a-z+.-]+:/i.test(node2.url) && // And that doesn’t contain ASCII control codes (character escapes and
    // references don’t work), space, or angle brackets…
    !/[\0- <>\u007F]/.test(node2.url)
  );
}
link$1.peek = linkPeek;
function link$1(node2, _, state, info) {
  const quote = checkQuote(state);
  const suffix = quote === '"' ? "Quote" : "Apostrophe";
  const tracker = state.createTracker(info);
  let exit2;
  let subexit;
  if (formatLinkAsAutolink(node2, state)) {
    const stack = state.stack;
    state.stack = [];
    exit2 = state.enter("autolink");
    let value2 = tracker.move("<");
    value2 += tracker.move(
      state.containerPhrasing(node2, {
        before: value2,
        after: ">",
        ...tracker.current()
      })
    );
    value2 += tracker.move(">");
    exit2();
    state.stack = stack;
    return value2;
  }
  exit2 = state.enter("link");
  subexit = state.enter("label");
  let value = tracker.move("[");
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: "](",
      ...tracker.current()
    })
  );
  value += tracker.move("](");
  subexit();
  if (
    // If there’s no url but there is a title…
    !node2.url && node2.title || // If there are control characters or whitespace.
    /[\0- \u007F]/.test(node2.url)
  ) {
    subexit = state.enter("destinationLiteral");
    value += tracker.move("<");
    value += tracker.move(
      state.safe(node2.url, { before: value, after: ">", ...tracker.current() })
    );
    value += tracker.move(">");
  } else {
    subexit = state.enter("destinationRaw");
    value += tracker.move(
      state.safe(node2.url, {
        before: value,
        after: node2.title ? " " : ")",
        ...tracker.current()
      })
    );
  }
  subexit();
  if (node2.title) {
    subexit = state.enter(`title${suffix}`);
    value += tracker.move(" " + quote);
    value += tracker.move(
      state.safe(node2.title, {
        before: value,
        after: quote,
        ...tracker.current()
      })
    );
    value += tracker.move(quote);
    subexit();
  }
  value += tracker.move(")");
  exit2();
  return value;
}
function linkPeek(node2, _, state) {
  return formatLinkAsAutolink(node2, state) ? "<" : "[";
}
linkReference.peek = linkReferencePeek;
function linkReference(node2, _, state, info) {
  const type = node2.referenceType;
  const exit2 = state.enter("linkReference");
  let subexit = state.enter("label");
  const tracker = state.createTracker(info);
  let value = tracker.move("[");
  const text2 = state.containerPhrasing(node2, {
    before: value,
    after: "]",
    ...tracker.current()
  });
  value += tracker.move(text2 + "][");
  subexit();
  const stack = state.stack;
  state.stack = [];
  subexit = state.enter("reference");
  const reference = state.safe(state.associationId(node2), {
    before: value,
    after: "]",
    ...tracker.current()
  });
  subexit();
  state.stack = stack;
  exit2();
  if (type === "full" || !text2 || text2 !== reference) {
    value += tracker.move(reference + "]");
  } else if (type === "shortcut") {
    value = value.slice(0, -1);
  } else {
    value += tracker.move("]");
  }
  return value;
}
function linkReferencePeek() {
  return "[";
}
function checkBullet(state) {
  const marker = state.options.bullet || "*";
  if (marker !== "*" && marker !== "+" && marker !== "-") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  }
  return marker;
}
function checkBulletOther(state) {
  const bullet = checkBullet(state);
  const bulletOther = state.options.bulletOther;
  if (!bulletOther) {
    return bullet === "*" ? "-" : "*";
  }
  if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") {
    throw new Error(
      "Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  }
  if (bulletOther === bullet) {
    throw new Error(
      "Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different"
    );
  }
  return bulletOther;
}
function checkBulletOrdered(state) {
  const marker = state.options.bulletOrdered || ".";
  if (marker !== "." && marker !== ")") {
    throw new Error(
      "Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  }
  return marker;
}
function checkRule(state) {
  const marker = state.options.rule || "*";
  if (marker !== "*" && marker !== "-" && marker !== "_") {
    throw new Error(
      "Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  }
  return marker;
}
function list(node2, parent, state, info) {
  const exit2 = state.enter("list");
  const bulletCurrent = state.bulletCurrent;
  let bullet = node2.ordered ? checkBulletOrdered(state) : checkBullet(state);
  const bulletOther = node2.ordered ? bullet === "." ? ")" : "." : checkBulletOther(state);
  let useDifferentMarker = parent && state.bulletLastUsed ? bullet === state.bulletLastUsed : false;
  if (!node2.ordered) {
    const firstListItem = node2.children ? node2.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (bullet === "*" || bullet === "-") && // Empty first list item:
      firstListItem && (!firstListItem.children || !firstListItem.children[0]) && // Directly in two other list items:
      state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && // That are each the first child.
      state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0
    ) {
      useDifferentMarker = true;
    }
    if (checkRule(state) === bullet && firstListItem) {
      let index2 = -1;
      while (++index2 < node2.children.length) {
        const item = node2.children[index2];
        if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
          useDifferentMarker = true;
          break;
        }
      }
    }
  }
  if (useDifferentMarker) {
    bullet = bulletOther;
  }
  state.bulletCurrent = bullet;
  const value = state.containerFlow(node2, info);
  state.bulletLastUsed = bullet;
  state.bulletCurrent = bulletCurrent;
  exit2();
  return value;
}
function checkListItemIndent(state) {
  const style = state.options.listItemIndent || "one";
  if (style !== "tab" && style !== "one" && style !== "mixed") {
    throw new Error(
      "Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  }
  return style;
}
function listItem(node2, parent, state, info) {
  const listItemIndent = checkListItemIndent(state);
  let bullet = state.bulletCurrent || checkBullet(state);
  if (parent && parent.type === "list" && parent.ordered) {
    bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node2)) + bullet;
  }
  let size = bullet.length + 1;
  if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node2.spread)) {
    size = Math.ceil(size / 4) * 4;
  }
  const tracker = state.createTracker(info);
  tracker.move(bullet + " ".repeat(size - bullet.length));
  tracker.shift(size);
  const exit2 = state.enter("listItem");
  const value = state.indentLines(
    state.containerFlow(node2, tracker.current()),
    map2
  );
  exit2();
  return value;
  function map2(line, index2, blank) {
    if (index2) {
      return (blank ? "" : " ".repeat(size)) + line;
    }
    return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
  }
}
function paragraph(node2, _, state, info) {
  const exit2 = state.enter("paragraph");
  const subexit = state.enter("phrasing");
  const value = state.containerPhrasing(node2, info);
  subexit();
  exit2();
  return value;
}
const phrasing = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  convert$2([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function root(node2, _, state, info) {
  const hasPhrasing = node2.children.some(function(d) {
    return phrasing(d);
  });
  const fn = hasPhrasing ? state.containerPhrasing : state.containerFlow;
  return fn.call(state, node2, info);
}
function checkStrong(state) {
  const marker = state.options.strong || "*";
  if (marker !== "*" && marker !== "_") {
    throw new Error(
      "Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`"
    );
  }
  return marker;
}
strong.peek = strongPeek;
function strong(node2, _, state, info) {
  const marker = checkStrong(state);
  const exit2 = state.enter("strong");
  const tracker = state.createTracker(info);
  let value = tracker.move(marker + marker);
  value += tracker.move(
    state.containerPhrasing(node2, {
      before: value,
      after: marker,
      ...tracker.current()
    })
  );
  value += tracker.move(marker + marker);
  exit2();
  return value;
}
function strongPeek(_, _1, state) {
  return state.options.strong || "*";
}
function text$1(node2, _, state, info) {
  return state.safe(node2.value, info);
}
function checkRuleRepetition(state) {
  const repetition = state.options.ruleRepetition || 3;
  if (repetition < 3) {
    throw new Error(
      "Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more"
    );
  }
  return repetition;
}
function thematicBreak(_, _1, state) {
  const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
  return state.options.ruleSpaces ? value.slice(0, -1) : value;
}
const handle = {
  blockquote,
  break: hardBreak,
  code: code$1,
  definition,
  emphasis,
  hardBreak,
  heading,
  html,
  image,
  imageReference,
  inlineCode,
  link: link$1,
  linkReference,
  list,
  listItem,
  paragraph,
  root,
  strong,
  text: text$1,
  thematicBreak
};
function gfmTableFromMarkdown() {
  return {
    enter: {
      table: enterTable,
      tableData: enterCell,
      tableHeader: enterCell,
      tableRow: enterRow
    },
    exit: {
      codeText: exitCodeText,
      table: exitTable,
      tableData: exit,
      tableHeader: exit,
      tableRow: exit
    }
  };
}
function enterTable(token) {
  const align = token._align;
  this.enter(
    {
      type: "table",
      align: align.map(function(d) {
        return d === "none" ? null : d;
      }),
      children: []
    },
    token
  );
  this.data.inTable = true;
}
function exitTable(token) {
  this.exit(token);
  this.data.inTable = void 0;
}
function enterRow(token) {
  this.enter({ type: "tableRow", children: [] }, token);
}
function exit(token) {
  this.exit(token);
}
function enterCell(token) {
  this.enter({ type: "tableCell", children: [] }, token);
}
function exitCodeText(token) {
  let value = this.resume();
  if (this.data.inTable) {
    value = value.replace(/\\([\\|])/g, replace$1);
  }
  const node2 = this.stack[this.stack.length - 1];
  ok$4(node2.type === "inlineCode");
  node2.value = value;
  this.exit(token);
}
function replace$1($0, $1) {
  return $1 === "|" ? $1 : $0;
}
function gfmTableToMarkdown(options) {
  const settings = options || {};
  const padding = settings.tableCellPadding;
  const alignDelimiters = settings.tablePipeAlign;
  const stringLength = settings.stringLength;
  const around = padding ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: "\n", inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: true, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: true, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: true, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: inlineCodeWithTable,
      table: handleTable,
      tableCell: handleTableCell,
      tableRow: handleTableRow
    }
  };
  function handleTable(node2, _, state, info) {
    return serializeData(handleTableAsData(node2, state, info), node2.align);
  }
  function handleTableRow(node2, _, state, info) {
    const row = handleTableRowAsData(node2, state, info);
    const value = serializeData([row]);
    return value.slice(0, value.indexOf("\n"));
  }
  function handleTableCell(node2, _, state, info) {
    const exit2 = state.enter("tableCell");
    const subexit = state.enter("phrasing");
    const value = state.containerPhrasing(node2, {
      ...info,
      before: around,
      after: around
    });
    subexit();
    exit2();
    return value;
  }
  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength
    });
  }
  function handleTableAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("table");
    while (++index2 < children.length) {
      result[index2] = handleTableRowAsData(children[index2], state, info);
    }
    subexit();
    return result;
  }
  function handleTableRowAsData(node2, state, info) {
    const children = node2.children;
    let index2 = -1;
    const result = [];
    const subexit = state.enter("tableRow");
    while (++index2 < children.length) {
      result[index2] = handleTableCell(children[index2], node2, state, info);
    }
    subexit();
    return result;
  }
  function inlineCodeWithTable(node2, parent, state) {
    let value = handle.inlineCode(node2, parent, state);
    if (state.stack.includes("tableCell")) {
      value = value.replace(/\|/g, "\\$&");
    }
    return value;
  }
}
function gfmTaskListItemFromMarkdown() {
  return {
    exit: {
      taskListCheckValueChecked: exitCheck,
      taskListCheckValueUnchecked: exitCheck,
      paragraph: exitParagraphWithTaskListItem
    }
  };
}
function gfmTaskListItemToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: { listItem: listItemWithTaskListItem }
  };
}
function exitCheck(token) {
  const node2 = this.stack[this.stack.length - 2];
  ok$4(node2.type === "listItem");
  node2.checked = token.type === "taskListCheckValueChecked";
}
function exitParagraphWithTaskListItem(token) {
  const parent = this.stack[this.stack.length - 2];
  if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
    const node2 = this.stack[this.stack.length - 1];
    ok$4(node2.type === "paragraph");
    const head = node2.children[0];
    if (head && head.type === "text") {
      const siblings = parent.children;
      let index2 = -1;
      let firstParaghraph;
      while (++index2 < siblings.length) {
        const sibling = siblings[index2];
        if (sibling.type === "paragraph") {
          firstParaghraph = sibling;
          break;
        }
      }
      if (firstParaghraph === node2) {
        head.value = head.value.slice(1);
        if (head.value.length === 0) {
          node2.children.shift();
        } else if (node2.position && head.position && typeof head.position.start.offset === "number") {
          head.position.start.column++;
          head.position.start.offset++;
          node2.position.start = Object.assign({}, head.position.start);
        }
      }
    }
  }
  this.exit(token);
}
function listItemWithTaskListItem(node2, parent, state, info) {
  const head = node2.children[0];
  const checkable = typeof node2.checked === "boolean" && head && head.type === "paragraph";
  const checkbox = "[" + (node2.checked ? "x" : " ") + "] ";
  const tracker = state.createTracker(info);
  if (checkable) {
    tracker.move(checkbox);
  }
  let value = handle.listItem(node2, parent, state, {
    ...info,
    ...tracker.current()
  });
  if (checkable) {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
  }
  return value;
  function check($0) {
    return $0 + checkbox;
  }
}
function gfmFromMarkdown() {
  return [
    gfmAutolinkLiteralFromMarkdown(),
    gfmFootnoteFromMarkdown(),
    gfmStrikethroughFromMarkdown(),
    gfmTableFromMarkdown(),
    gfmTaskListItemFromMarkdown()
  ];
}
function gfmToMarkdown(options) {
  return {
    extensions: [
      gfmAutolinkLiteralToMarkdown(),
      gfmFootnoteToMarkdown(),
      gfmStrikethroughToMarkdown(),
      gfmTableToMarkdown(options),
      gfmTaskListItemToMarkdown()
    ]
  };
}
function splice(list2, start, remove, items) {
  const end2 = list2.length;
  let chunkStart = 0;
  let parameters;
  if (start < 0) {
    start = -start > end2 ? 0 : end2 + start;
  } else {
    start = start > end2 ? end2 : start;
  }
  remove = remove > 0 ? remove : 0;
  if (items.length < 1e4) {
    parameters = Array.from(items);
    parameters.unshift(start, remove);
    list2.splice(...parameters);
  } else {
    if (remove)
      list2.splice(start, remove);
    while (chunkStart < items.length) {
      parameters = items.slice(chunkStart, chunkStart + 1e4);
      parameters.unshift(start, 0);
      list2.splice(...parameters);
      chunkStart += 1e4;
      start += 1e4;
    }
  }
}
function push(list2, items) {
  if (list2.length > 0) {
    splice(list2, list2.length, 0, items);
    return list2;
  }
  return items;
}
const hasOwnProperty = {}.hasOwnProperty;
function combineExtensions(extensions) {
  const all2 = {};
  let index2 = -1;
  while (++index2 < extensions.length) {
    syntaxExtension(all2, extensions[index2]);
  }
  return all2;
}
function syntaxExtension(all2, extension) {
  let hook;
  for (hook in extension) {
    const maybe = hasOwnProperty.call(all2, hook) ? all2[hook] : void 0;
    const left = maybe || (all2[hook] = {});
    const right = extension[hook];
    let code2;
    if (right) {
      for (code2 in right) {
        if (!hasOwnProperty.call(left, code2))
          left[code2] = [];
        const value = right[code2];
        constructs(
          // @ts-expect-error Looks like a list.
          left[code2],
          Array.isArray(value) ? value : value ? [value] : []
        );
      }
    }
  }
}
function constructs(existing, list2) {
  let index2 = -1;
  const before = [];
  while (++index2 < list2.length) {
    (list2[index2].add === "after" ? existing : before).push(list2[index2]);
  }
  splice(existing, 0, 0, before);
}
const wwwPrefix = {
  tokenize: tokenizeWwwPrefix,
  partial: true
};
const domain = {
  tokenize: tokenizeDomain,
  partial: true
};
const path = {
  tokenize: tokenizePath,
  partial: true
};
const trail = {
  tokenize: tokenizeTrail,
  partial: true
};
const emailDomainDotTrail = {
  tokenize: tokenizeEmailDomainDotTrail,
  partial: true
};
const wwwAutolink = {
  tokenize: tokenizeWwwAutolink,
  previous: previousWww
};
const protocolAutolink = {
  tokenize: tokenizeProtocolAutolink,
  previous: previousProtocol
};
const emailAutolink = {
  tokenize: tokenizeEmailAutolink,
  previous: previousEmail
};
const text = {};
function gfmAutolinkLiteral() {
  return {
    text
  };
}
let code = 48;
while (code < 123) {
  text[code] = emailAutolink;
  code++;
  if (code === 58)
    code = 65;
  else if (code === 91)
    code = 97;
}
text[43] = emailAutolink;
text[45] = emailAutolink;
text[46] = emailAutolink;
text[95] = emailAutolink;
text[72] = [emailAutolink, protocolAutolink];
text[104] = [emailAutolink, protocolAutolink];
text[87] = [emailAutolink, wwwAutolink];
text[119] = [emailAutolink, wwwAutolink];
function tokenizeEmailAutolink(effects, ok2, nok) {
  const self = this;
  let dot;
  let data;
  return start;
  function start(code2) {
    if (!gfmAtext(code2) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkEmail");
    return atext(code2);
  }
  function atext(code2) {
    if (gfmAtext(code2)) {
      effects.consume(code2);
      return atext;
    }
    if (code2 === 64) {
      effects.consume(code2);
      return emailDomain;
    }
    return nok(code2);
  }
  function emailDomain(code2) {
    if (code2 === 46) {
      return effects.check(
        emailDomainDotTrail,
        emailDomainAfter,
        emailDomainDot
      )(code2);
    }
    if (code2 === 45 || code2 === 95 || asciiAlphanumeric(code2)) {
      data = true;
      effects.consume(code2);
      return emailDomain;
    }
    return emailDomainAfter(code2);
  }
  function emailDomainDot(code2) {
    effects.consume(code2);
    dot = true;
    return emailDomain;
  }
  function emailDomainAfter(code2) {
    if (data && dot && asciiAlpha(self.previous)) {
      effects.exit("literalAutolinkEmail");
      effects.exit("literalAutolink");
      return ok2(code2);
    }
    return nok(code2);
  }
}
function tokenizeWwwAutolink(effects, ok2, nok) {
  const self = this;
  return wwwStart;
  function wwwStart(code2) {
    if (code2 !== 87 && code2 !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) {
      return nok(code2);
    }
    effects.enter("literalAutolink");
    effects.enter("literalAutolinkWww");
    return effects.check(
      wwwPrefix,
      effects.attempt(domain, effects.attempt(path, wwwAfter), nok),
      nok
    )(code2);
  }
  function wwwAfter(code2) {
    effects.exit("literalAutolinkWww");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeProtocolAutolink(effects, ok2, nok) {
  const self = this;
  let buffer = "";
  let seen = false;
  return protocolStart;
  function protocolStart(code2) {
    if ((code2 === 72 || code2 === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
      effects.enter("literalAutolink");
      effects.enter("literalAutolinkHttp");
      buffer += String.fromCodePoint(code2);
      effects.consume(code2);
      return protocolPrefixInside;
    }
    return nok(code2);
  }
  function protocolPrefixInside(code2) {
    if (asciiAlpha(code2) && buffer.length < 5) {
      buffer += String.fromCodePoint(code2);
      effects.consume(code2);
      return protocolPrefixInside;
    }
    if (code2 === 58) {
      const protocol = buffer.toLowerCase();
      if (protocol === "http" || protocol === "https") {
        effects.consume(code2);
        return protocolSlashesInside;
      }
    }
    return nok(code2);
  }
  function protocolSlashesInside(code2) {
    if (code2 === 47) {
      effects.consume(code2);
      if (seen) {
        return afterProtocol;
      }
      seen = true;
      return protocolSlashesInside;
    }
    return nok(code2);
  }
  function afterProtocol(code2) {
    return code2 === null || asciiControl(code2) || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || unicodePunctuation(code2) ? nok(code2) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code2);
  }
  function protocolAfter(code2) {
    effects.exit("literalAutolinkHttp");
    effects.exit("literalAutolink");
    return ok2(code2);
  }
}
function tokenizeWwwPrefix(effects, ok2, nok) {
  let size = 0;
  return wwwPrefixInside;
  function wwwPrefixInside(code2) {
    if ((code2 === 87 || code2 === 119) && size < 3) {
      size++;
      effects.consume(code2);
      return wwwPrefixInside;
    }
    if (code2 === 46 && size === 3) {
      effects.consume(code2);
      return wwwPrefixAfter;
    }
    return nok(code2);
  }
  function wwwPrefixAfter(code2) {
    return code2 === null ? nok(code2) : ok2(code2);
  }
}
function tokenizeDomain(effects, ok2, nok) {
  let underscoreInLastSegment;
  let underscoreInLastLastSegment;
  let seen;
  return domainInside;
  function domainInside(code2) {
    if (code2 === 46 || code2 === 95) {
      return effects.check(trail, domainAfter, domainAtPunctuation)(code2);
    }
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2) || code2 !== 45 && unicodePunctuation(code2)) {
      return domainAfter(code2);
    }
    seen = true;
    effects.consume(code2);
    return domainInside;
  }
  function domainAtPunctuation(code2) {
    if (code2 === 95) {
      underscoreInLastSegment = true;
    } else {
      underscoreInLastLastSegment = underscoreInLastSegment;
      underscoreInLastSegment = void 0;
    }
    effects.consume(code2);
    return domainInside;
  }
  function domainAfter(code2) {
    if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) {
      return nok(code2);
    }
    return ok2(code2);
  }
}
function tokenizePath(effects, ok2) {
  let sizeOpen = 0;
  let sizeClose = 0;
  return pathInside;
  function pathInside(code2) {
    if (code2 === 40) {
      sizeOpen++;
      effects.consume(code2);
      return pathInside;
    }
    if (code2 === 41 && sizeClose < sizeOpen) {
      return pathAtPunctuation(code2);
    }
    if (code2 === 33 || code2 === 34 || code2 === 38 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 60 || code2 === 63 || code2 === 93 || code2 === 95 || code2 === 126) {
      return effects.check(trail, ok2, pathAtPunctuation)(code2);
    }
    if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return ok2(code2);
    }
    effects.consume(code2);
    return pathInside;
  }
  function pathAtPunctuation(code2) {
    if (code2 === 41) {
      sizeClose++;
    }
    effects.consume(code2);
    return pathInside;
  }
}
function tokenizeTrail(effects, ok2, nok) {
  return trail2;
  function trail2(code2) {
    if (code2 === 33 || code2 === 34 || code2 === 39 || code2 === 41 || code2 === 42 || code2 === 44 || code2 === 46 || code2 === 58 || code2 === 59 || code2 === 63 || code2 === 95 || code2 === 126) {
      effects.consume(code2);
      return trail2;
    }
    if (code2 === 38) {
      effects.consume(code2);
      return trailCharRefStart;
    }
    if (code2 === 93) {
      effects.consume(code2);
      return trailBracketAfter;
    }
    if (
      // `<` is an end.
      code2 === 60 || // So is whitespace.
      code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)
    ) {
      return ok2(code2);
    }
    return nok(code2);
  }
  function trailBracketAfter(code2) {
    if (code2 === null || code2 === 40 || code2 === 91 || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
      return ok2(code2);
    }
    return trail2(code2);
  }
  function trailCharRefStart(code2) {
    return asciiAlpha(code2) ? trailCharRefInside(code2) : nok(code2);
  }
  function trailCharRefInside(code2) {
    if (code2 === 59) {
      effects.consume(code2);
      return trail2;
    }
    if (asciiAlpha(code2)) {
      effects.consume(code2);
      return trailCharRefInside;
    }
    return nok(code2);
  }
}
function tokenizeEmailDomainDotTrail(effects, ok2, nok) {
  return start;
  function start(code2) {
    effects.consume(code2);
    return after;
  }
  function after(code2) {
    return asciiAlphanumeric(code2) ? nok(code2) : ok2(code2);
  }
}
function previousWww(code2) {
  return code2 === null || code2 === 40 || code2 === 42 || code2 === 95 || code2 === 91 || code2 === 93 || code2 === 126 || markdownLineEndingOrSpace(code2);
}
function previousProtocol(code2) {
  return !asciiAlpha(code2);
}
function previousEmail(code2) {
  return !(code2 === 47 || gfmAtext(code2));
}
function gfmAtext(code2) {
  return code2 === 43 || code2 === 45 || code2 === 46 || code2 === 95 || asciiAlphanumeric(code2);
}
function previousUnbalanced(events) {
  let index2 = events.length;
  let result = false;
  while (index2--) {
    const token = events[index2][1];
    if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
      result = true;
      break;
    }
    if (token._gfmAutolinkLiteralWalkedInto) {
      result = false;
      break;
    }
  }
  if (events.length > 0 && !result) {
    events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
  }
  return result;
}
function classifyCharacter(code2) {
  if (code2 === null || markdownLineEndingOrSpace(code2) || unicodeWhitespace(code2)) {
    return 1;
  }
  if (unicodePunctuation(code2)) {
    return 2;
  }
}
function resolveAll(constructs2, events, context) {
  const called = [];
  let index2 = -1;
  while (++index2 < constructs2.length) {
    const resolve = constructs2[index2].resolveAll;
    if (resolve && !called.includes(resolve)) {
      events = resolve(events, context);
      called.push(resolve);
    }
  }
  return events;
}
function factorySpace(effects, ok2, type, max) {
  const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
  let size = 0;
  return start;
  function start(code2) {
    if (markdownSpace(code2)) {
      effects.enter(type);
      return prefix(code2);
    }
    return ok2(code2);
  }
  function prefix(code2) {
    if (markdownSpace(code2) && size++ < limit) {
      effects.consume(code2);
      return prefix;
    }
    effects.exit(type);
    return ok2(code2);
  }
}
const blankLine = {
  tokenize: tokenizeBlankLine,
  partial: true
};
function tokenizeBlankLine(effects, ok2, nok) {
  return start;
  function start(code2) {
    return markdownSpace(code2) ? factorySpace(effects, after, "linePrefix")(code2) : after(code2);
  }
  function after(code2) {
    return code2 === null || markdownLineEnding(code2) ? ok2(code2) : nok(code2);
  }
}
const indent = {
  tokenize: tokenizeIndent,
  partial: true
};
function gfmFootnote() {
  return {
    document: {
      [91]: {
        tokenize: tokenizeDefinitionStart,
        continuation: {
          tokenize: tokenizeDefinitionContinuation
        },
        exit: gfmFootnoteDefinitionEnd
      }
    },
    text: {
      [91]: {
        tokenize: tokenizeGfmFootnoteCall
      },
      [93]: {
        add: "after",
        tokenize: tokenizePotentialGfmFootnoteCall,
        resolveTo: resolveToPotentialGfmFootnoteCall
      }
    }
  };
}
function tokenizePotentialGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  let index2 = self.events.length;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let labelStart;
  while (index2--) {
    const token = self.events[index2][1];
    if (token.type === "labelImage") {
      labelStart = token;
      break;
    }
    if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") {
      break;
    }
  }
  return start;
  function start(code2) {
    if (!labelStart || !labelStart._balanced) {
      return nok(code2);
    }
    const id2 = normalizeIdentifier(
      self.sliceSerialize({
        start: labelStart.end,
        end: self.now()
      })
    );
    if (id2.codePointAt(0) !== 94 || !defined.includes(id2.slice(1))) {
      return nok(code2);
    }
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return ok2(code2);
  }
}
function resolveToPotentialGfmFootnoteCall(events, context) {
  let index2 = events.length;
  while (index2--) {
    if (events[index2][1].type === "labelImage" && events[index2][0] === "enter") {
      events[index2][1];
      break;
    }
  }
  events[index2 + 1][1].type = "data";
  events[index2 + 3][1].type = "gfmFootnoteCallLabelMarker";
  const call = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, events[index2 + 3][1].start),
    end: Object.assign({}, events[events.length - 1][1].end)
  };
  const marker = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, events[index2 + 3][1].end),
    end: Object.assign({}, events[index2 + 3][1].end)
  };
  marker.end.column++;
  marker.end.offset++;
  marker.end._bufferIndex++;
  const string = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, marker.end),
    end: Object.assign({}, events[events.length - 1][1].start)
  };
  const chunk = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, string.start),
    end: Object.assign({}, string.end)
  };
  const replacement = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    events[index2 + 1],
    events[index2 + 2],
    ["enter", call, context],
    // The `[`
    events[index2 + 3],
    events[index2 + 4],
    // The `^`.
    ["enter", marker, context],
    ["exit", marker, context],
    // Everything in between.
    ["enter", string, context],
    ["enter", chunk, context],
    ["exit", chunk, context],
    ["exit", string, context],
    // The ending (`]`, properly parsed and labelled).
    events[events.length - 2],
    events[events.length - 1],
    ["exit", call, context]
  ];
  events.splice(index2, events.length - index2 + 1, ...replacement);
  return events;
}
function tokenizeGfmFootnoteCall(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteCall");
    effects.enter("gfmFootnoteCallLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallLabelMarker");
    return callStart;
  }
  function callStart(code2) {
    if (code2 !== 94)
      return nok(code2);
    effects.enter("gfmFootnoteCallMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteCallMarker");
    effects.enter("gfmFootnoteCallString");
    effects.enter("chunkString").contentType = "string";
    return callData;
  }
  function callData(code2) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code2 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
    ) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteCallString");
      if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) {
        return nok(code2);
      }
      effects.enter("gfmFootnoteCallLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteCallLabelMarker");
      effects.exit("gfmFootnoteCall");
      return ok2;
    }
    if (!markdownLineEndingOrSpace(code2)) {
      data = true;
    }
    size++;
    effects.consume(code2);
    return code2 === 92 ? callEscape : callData;
  }
  function callEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return callData;
    }
    return callData(code2);
  }
}
function tokenizeDefinitionStart(effects, ok2, nok) {
  const self = this;
  const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
  let identifier;
  let size = 0;
  let data;
  return start;
  function start(code2) {
    effects.enter("gfmFootnoteDefinition")._container = true;
    effects.enter("gfmFootnoteDefinitionLabel");
    effects.enter("gfmFootnoteDefinitionLabelMarker");
    effects.consume(code2);
    effects.exit("gfmFootnoteDefinitionLabelMarker");
    return labelAtMarker;
  }
  function labelAtMarker(code2) {
    if (code2 === 94) {
      effects.enter("gfmFootnoteDefinitionMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionMarker");
      effects.enter("gfmFootnoteDefinitionLabelString");
      effects.enter("chunkString").contentType = "string";
      return labelInside;
    }
    return nok(code2);
  }
  function labelInside(code2) {
    if (
      // Too long.
      size > 999 || // Closing brace with nothing.
      code2 === 93 && !data || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      code2 === null || code2 === 91 || markdownLineEndingOrSpace(code2)
    ) {
      return nok(code2);
    }
    if (code2 === 93) {
      effects.exit("chunkString");
      const token = effects.exit("gfmFootnoteDefinitionLabelString");
      identifier = normalizeIdentifier(self.sliceSerialize(token));
      effects.enter("gfmFootnoteDefinitionLabelMarker");
      effects.consume(code2);
      effects.exit("gfmFootnoteDefinitionLabelMarker");
      effects.exit("gfmFootnoteDefinitionLabel");
      return labelAfter;
    }
    if (!markdownLineEndingOrSpace(code2)) {
      data = true;
    }
    size++;
    effects.consume(code2);
    return code2 === 92 ? labelEscape : labelInside;
  }
  function labelEscape(code2) {
    if (code2 === 91 || code2 === 92 || code2 === 93) {
      effects.consume(code2);
      size++;
      return labelInside;
    }
    return labelInside(code2);
  }
  function labelAfter(code2) {
    if (code2 === 58) {
      effects.enter("definitionMarker");
      effects.consume(code2);
      effects.exit("definitionMarker");
      if (!defined.includes(identifier)) {
        defined.push(identifier);
      }
      return factorySpace(
        effects,
        whitespaceAfter,
        "gfmFootnoteDefinitionWhitespace"
      );
    }
    return nok(code2);
  }
  function whitespaceAfter(code2) {
    return ok2(code2);
  }
}
function tokenizeDefinitionContinuation(effects, ok2, nok) {
  return effects.check(blankLine, ok2, effects.attempt(indent, ok2, nok));
}
function gfmFootnoteDefinitionEnd(effects) {
  effects.exit("gfmFootnoteDefinition");
}
function tokenizeIndent(effects, ok2, nok) {
  const self = this;
  return factorySpace(
    effects,
    afterPrefix,
    "gfmFootnoteDefinitionIndent",
    4 + 1
  );
  function afterPrefix(code2) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok2(code2) : nok(code2);
  }
}
function gfmStrikethrough(options) {
  const options_ = options || {};
  let single = options_.singleTilde;
  const tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  };
  if (single === null || single === void 0) {
    single = true;
  }
  return {
    text: {
      [126]: tokenizer
    },
    insideSpan: {
      null: [tokenizer]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function resolveAllStrikethrough(events, context) {
    let index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][0] === "enter" && events[index2][1].type === "strikethroughSequenceTemporary" && events[index2][1]._close) {
        let open = index2;
        while (open--) {
          if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && // If the sizes are the same:
          events[index2][1].end.offset - events[index2][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
            events[index2][1].type = "strikethroughSequence";
            events[open][1].type = "strikethroughSequence";
            const strikethrough = {
              type: "strikethrough",
              start: Object.assign({}, events[open][1].start),
              end: Object.assign({}, events[index2][1].end)
            };
            const text2 = {
              type: "strikethroughText",
              start: Object.assign({}, events[open][1].end),
              end: Object.assign({}, events[index2][1].start)
            };
            const nextEvents = [
              ["enter", strikethrough, context],
              ["enter", events[open][1], context],
              ["exit", events[open][1], context],
              ["enter", text2, context]
            ];
            const insideSpan = context.parser.constructs.insideSpan.null;
            if (insideSpan) {
              splice(
                nextEvents,
                nextEvents.length,
                0,
                resolveAll(insideSpan, events.slice(open + 1, index2), context)
              );
            }
            splice(nextEvents, nextEvents.length, 0, [
              ["exit", text2, context],
              ["enter", events[index2][1], context],
              ["exit", events[index2][1], context],
              ["exit", strikethrough, context]
            ]);
            splice(events, open - 1, index2 - open + 3, nextEvents);
            index2 = open + nextEvents.length - 2;
            break;
          }
        }
      }
    }
    index2 = -1;
    while (++index2 < events.length) {
      if (events[index2][1].type === "strikethroughSequenceTemporary") {
        events[index2][1].type = "data";
      }
    }
    return events;
  }
  function tokenizeStrikethrough(effects, ok2, nok) {
    const previous2 = this.previous;
    const events = this.events;
    let size = 0;
    return start;
    function start(code2) {
      if (previous2 === 126 && events[events.length - 1][1].type !== "characterEscape") {
        return nok(code2);
      }
      effects.enter("strikethroughSequenceTemporary");
      return more(code2);
    }
    function more(code2) {
      const before = classifyCharacter(previous2);
      if (code2 === 126) {
        if (size > 1)
          return nok(code2);
        effects.consume(code2);
        size++;
        return more;
      }
      if (size < 2 && !single)
        return nok(code2);
      const token = effects.exit("strikethroughSequenceTemporary");
      const after = classifyCharacter(code2);
      token._open = !after || after === 2 && Boolean(before);
      token._close = !before || before === 2 && Boolean(after);
      return ok2(code2);
    }
  }
}
class EditMap {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   * @param {number} remove
   * @param {Array<Event>} add
   * @returns {undefined}
   */
  add(index2, remove, add) {
    addImpl(this, index2, remove, add);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImpl(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   * @returns {undefined}
   */
  consume(events) {
    this.map.sort(function(a2, b2) {
      return a2[0] - b2[0];
    });
    if (this.map.length === 0) {
      return;
    }
    let index2 = this.map.length;
    const vecs = [];
    while (index2 > 0) {
      index2 -= 1;
      vecs.push(
        events.slice(this.map[index2][0] + this.map[index2][1]),
        this.map[index2][2]
      );
      events.length = this.map[index2][0];
    }
    vecs.push([...events]);
    events.length = 0;
    let slice = vecs.pop();
    while (slice) {
      events.push(...slice);
      slice = vecs.pop();
    }
    this.map.length = 0;
  }
}
function addImpl(editMap, at, remove, add) {
  let index2 = 0;
  if (remove === 0 && add.length === 0) {
    return;
  }
  while (index2 < editMap.map.length) {
    if (editMap.map[index2][0] === at) {
      editMap.map[index2][1] += remove;
      editMap.map[index2][2].push(...add);
      return;
    }
    index2 += 1;
  }
  editMap.map.push([at, remove, add]);
}
function gfmTableAlign(events, index2) {
  let inDelimiterRow = false;
  const align = [];
  while (index2 < events.length) {
    const event = events[index2];
    if (inDelimiterRow) {
      if (event[0] === "enter") {
        if (event[1].type === "tableContent") {
          align.push(
            events[index2 + 1][1].type === "tableDelimiterMarker" ? "left" : "none"
          );
        }
      } else if (event[1].type === "tableContent") {
        if (events[index2 - 1][1].type === "tableDelimiterMarker") {
          const alignIndex = align.length - 1;
          align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
        }
      } else if (event[1].type === "tableDelimiterRow") {
        break;
      }
    } else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") {
      inDelimiterRow = true;
    }
    index2 += 1;
  }
  return align;
}
function gfmTable() {
  return {
    flow: {
      null: {
        tokenize: tokenizeTable,
        resolveAll: resolveTable
      }
    }
  };
}
function tokenizeTable(effects, ok2, nok) {
  const self = this;
  let size = 0;
  let sizeB = 0;
  let seen;
  return start;
  function start(code2) {
    let index2 = self.events.length - 1;
    while (index2 > -1) {
      const type = self.events[index2][1].type;
      if (type === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      type === "linePrefix")
        index2--;
      else
        break;
    }
    const tail = index2 > -1 ? self.events[index2][1].type : null;
    const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
    if (next === bodyRowStart && self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    return next(code2);
  }
  function headRowBefore(code2) {
    effects.enter("tableHead");
    effects.enter("tableRow");
    return headRowStart(code2);
  }
  function headRowStart(code2) {
    if (code2 === 124) {
      return headRowBreak(code2);
    }
    seen = true;
    sizeB += 1;
    return headRowBreak(code2);
  }
  function headRowBreak(code2) {
    if (code2 === null) {
      return nok(code2);
    }
    if (markdownLineEnding(code2)) {
      if (sizeB > 1) {
        sizeB = 0;
        self.interrupt = true;
        effects.exit("tableRow");
        effects.enter("lineEnding");
        effects.consume(code2);
        effects.exit("lineEnding");
        return headDelimiterStart;
      }
      return nok(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, headRowBreak, "whitespace")(code2);
    }
    sizeB += 1;
    if (seen) {
      seen = false;
      size += 1;
    }
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      seen = true;
      return headRowBreak;
    }
    effects.enter("data");
    return headRowData(code2);
  }
  function headRowData(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("data");
      return headRowBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? headRowEscape : headRowData;
  }
  function headRowEscape(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return headRowData;
    }
    return headRowData(code2);
  }
  function headDelimiterStart(code2) {
    self.interrupt = false;
    if (self.parser.lazy[self.now().line]) {
      return nok(code2);
    }
    effects.enter("tableDelimiterRow");
    seen = false;
    if (markdownSpace(code2)) {
      return factorySpace(
        effects,
        headDelimiterBefore,
        "linePrefix",
        self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
      )(code2);
    }
    return headDelimiterBefore(code2);
  }
  function headDelimiterBefore(code2) {
    if (code2 === 45 || code2 === 58) {
      return headDelimiterValueBefore(code2);
    }
    if (code2 === 124) {
      seen = true;
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return headDelimiterCellBefore;
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterCellBefore(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code2);
    }
    return headDelimiterValueBefore(code2);
  }
  function headDelimiterValueBefore(code2) {
    if (code2 === 58) {
      sizeB += 1;
      seen = true;
      effects.enter("tableDelimiterMarker");
      effects.consume(code2);
      effects.exit("tableDelimiterMarker");
      return headDelimiterLeftAlignmentAfter;
    }
    if (code2 === 45) {
      sizeB += 1;
      return headDelimiterLeftAlignmentAfter(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      return headDelimiterCellAfter(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterLeftAlignmentAfter(code2) {
    if (code2 === 45) {
      effects.enter("tableDelimiterFiller");
      return headDelimiterFiller(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterFiller(code2) {
    if (code2 === 45) {
      effects.consume(code2);
      return headDelimiterFiller;
    }
    if (code2 === 58) {
      seen = true;
      effects.exit("tableDelimiterFiller");
      effects.enter("tableDelimiterMarker");
      effects.consume(code2);
      effects.exit("tableDelimiterMarker");
      return headDelimiterRightAlignmentAfter;
    }
    effects.exit("tableDelimiterFiller");
    return headDelimiterRightAlignmentAfter(code2);
  }
  function headDelimiterRightAlignmentAfter(code2) {
    if (markdownSpace(code2)) {
      return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code2);
    }
    return headDelimiterCellAfter(code2);
  }
  function headDelimiterCellAfter(code2) {
    if (code2 === 124) {
      return headDelimiterBefore(code2);
    }
    if (code2 === null || markdownLineEnding(code2)) {
      if (!seen || size !== sizeB) {
        return headDelimiterNok(code2);
      }
      effects.exit("tableDelimiterRow");
      effects.exit("tableHead");
      return ok2(code2);
    }
    return headDelimiterNok(code2);
  }
  function headDelimiterNok(code2) {
    return nok(code2);
  }
  function bodyRowStart(code2) {
    effects.enter("tableRow");
    return bodyRowBreak(code2);
  }
  function bodyRowBreak(code2) {
    if (code2 === 124) {
      effects.enter("tableCellDivider");
      effects.consume(code2);
      effects.exit("tableCellDivider");
      return bodyRowBreak;
    }
    if (code2 === null || markdownLineEnding(code2)) {
      effects.exit("tableRow");
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return factorySpace(effects, bodyRowBreak, "whitespace")(code2);
    }
    effects.enter("data");
    return bodyRowData(code2);
  }
  function bodyRowData(code2) {
    if (code2 === null || code2 === 124 || markdownLineEndingOrSpace(code2)) {
      effects.exit("data");
      return bodyRowBreak(code2);
    }
    effects.consume(code2);
    return code2 === 92 ? bodyRowEscape : bodyRowData;
  }
  function bodyRowEscape(code2) {
    if (code2 === 92 || code2 === 124) {
      effects.consume(code2);
      return bodyRowData;
    }
    return bodyRowData(code2);
  }
}
function resolveTable(events, context) {
  let index2 = -1;
  let inFirstCellAwaitingPipe = true;
  let rowKind = 0;
  let lastCell = [0, 0, 0, 0];
  let cell = [0, 0, 0, 0];
  let afterHeadAwaitingFirstBodyRow = false;
  let lastTableEnd = 0;
  let currentTable;
  let currentBody;
  let currentCell;
  const map2 = new EditMap();
  while (++index2 < events.length) {
    const event = events[index2];
    const token = event[1];
    if (event[0] === "enter") {
      if (token.type === "tableHead") {
        afterHeadAwaitingFirstBodyRow = false;
        if (lastTableEnd !== 0) {
          flushTableEnd(map2, context, lastTableEnd, currentTable, currentBody);
          currentBody = void 0;
          lastTableEnd = 0;
        }
        currentTable = {
          type: "table",
          start: Object.assign({}, token.start),
          // Note: correct end is set later.
          end: Object.assign({}, token.end)
        };
        map2.add(index2, 0, [["enter", currentTable, context]]);
      } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
        inFirstCellAwaitingPipe = true;
        currentCell = void 0;
        lastCell = [0, 0, 0, 0];
        cell = [0, index2 + 1, 0, 0];
        if (afterHeadAwaitingFirstBodyRow) {
          afterHeadAwaitingFirstBodyRow = false;
          currentBody = {
            type: "tableBody",
            start: Object.assign({}, token.start),
            // Note: correct end is set later.
            end: Object.assign({}, token.end)
          };
          map2.add(index2, 0, [["enter", currentBody, context]]);
        }
        rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
      } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
        inFirstCellAwaitingPipe = false;
        if (cell[2] === 0) {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map2,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
            lastCell = [0, 0, 0, 0];
          }
          cell[2] = index2;
        }
      } else if (token.type === "tableCellDivider") {
        if (inFirstCellAwaitingPipe) {
          inFirstCellAwaitingPipe = false;
        } else {
          if (lastCell[1] !== 0) {
            cell[0] = cell[1];
            currentCell = flushCell(
              map2,
              context,
              lastCell,
              rowKind,
              void 0,
              currentCell
            );
          }
          lastCell = cell;
          cell = [lastCell[1], index2, 0, 0];
        }
      }
    } else if (token.type === "tableHead") {
      afterHeadAwaitingFirstBodyRow = true;
      lastTableEnd = index2;
    } else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
      lastTableEnd = index2;
      if (lastCell[1] !== 0) {
        cell[0] = cell[1];
        currentCell = flushCell(
          map2,
          context,
          lastCell,
          rowKind,
          index2,
          currentCell
        );
      } else if (cell[1] !== 0) {
        currentCell = flushCell(map2, context, cell, rowKind, index2, currentCell);
      }
      rowKind = 0;
    } else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
      cell[3] = index2;
    }
  }
  if (lastTableEnd !== 0) {
    flushTableEnd(map2, context, lastTableEnd, currentTable, currentBody);
  }
  map2.consume(context.events);
  index2 = -1;
  while (++index2 < context.events.length) {
    const event = context.events[index2];
    if (event[0] === "enter" && event[1].type === "table") {
      event[1]._align = gfmTableAlign(context.events, index2);
    }
  }
  return events;
}
function flushCell(map2, context, range, rowKind, rowEnd, previousCell) {
  const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
  const valueName = "tableContent";
  if (range[0] !== 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
    map2.add(range[0], 0, [["exit", previousCell, context]]);
  }
  const now = getPoint(context.events, range[1]);
  previousCell = {
    type: groupName,
    start: Object.assign({}, now),
    // Note: correct end is set later.
    end: Object.assign({}, now)
  };
  map2.add(range[1], 0, [["enter", previousCell, context]]);
  if (range[2] !== 0) {
    const relatedStart = getPoint(context.events, range[2]);
    const relatedEnd = getPoint(context.events, range[3]);
    const valueToken = {
      type: valueName,
      start: Object.assign({}, relatedStart),
      end: Object.assign({}, relatedEnd)
    };
    map2.add(range[2], 0, [["enter", valueToken, context]]);
    if (rowKind !== 2) {
      const start = context.events[range[2]];
      const end2 = context.events[range[3]];
      start[1].end = Object.assign({}, end2[1].end);
      start[1].type = "chunkText";
      start[1].contentType = "text";
      if (range[3] > range[2] + 1) {
        const a2 = range[2] + 1;
        const b2 = range[3] - range[2] - 1;
        map2.add(a2, b2, []);
      }
    }
    map2.add(range[3] + 1, 0, [["exit", valueToken, context]]);
  }
  if (rowEnd !== void 0) {
    previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
    map2.add(rowEnd, 0, [["exit", previousCell, context]]);
    previousCell = void 0;
  }
  return previousCell;
}
function flushTableEnd(map2, context, index2, table, tableBody) {
  const exits = [];
  const related = getPoint(context.events, index2);
  if (tableBody) {
    tableBody.end = Object.assign({}, related);
    exits.push(["exit", tableBody, context]);
  }
  table.end = Object.assign({}, related);
  exits.push(["exit", table, context]);
  map2.add(index2 + 1, 0, exits);
}
function getPoint(events, index2) {
  const event = events[index2];
  const side = event[0] === "enter" ? "start" : "end";
  return event[1][side];
}
const tasklistCheck = {
  tokenize: tokenizeTasklistCheck
};
function gfmTaskListItem() {
  return {
    text: {
      [91]: tasklistCheck
    }
  };
}
function tokenizeTasklistCheck(effects, ok2, nok) {
  const self = this;
  return open;
  function open(code2) {
    if (
      // Exit if there’s stuff before.
      self.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code2);
    }
    effects.enter("taskListCheck");
    effects.enter("taskListCheckMarker");
    effects.consume(code2);
    effects.exit("taskListCheckMarker");
    return inside;
  }
  function inside(code2) {
    if (markdownLineEndingOrSpace(code2)) {
      effects.enter("taskListCheckValueUnchecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueUnchecked");
      return close;
    }
    if (code2 === 88 || code2 === 120) {
      effects.enter("taskListCheckValueChecked");
      effects.consume(code2);
      effects.exit("taskListCheckValueChecked");
      return close;
    }
    return nok(code2);
  }
  function close(code2) {
    if (code2 === 93) {
      effects.enter("taskListCheckMarker");
      effects.consume(code2);
      effects.exit("taskListCheckMarker");
      effects.exit("taskListCheck");
      return after;
    }
    return nok(code2);
  }
  function after(code2) {
    if (markdownLineEnding(code2)) {
      return ok2(code2);
    }
    if (markdownSpace(code2)) {
      return effects.check(
        {
          tokenize: spaceThenNonSpace
        },
        ok2,
        nok
      )(code2);
    }
    return nok(code2);
  }
}
function spaceThenNonSpace(effects, ok2, nok) {
  return factorySpace(effects, after, "whitespace");
  function after(code2) {
    return code2 === null ? nok(code2) : ok2(code2);
  }
}
function gfm(options) {
  return combineExtensions([
    gfmAutolinkLiteral(),
    gfmFootnote(),
    gfmStrikethrough(options),
    gfmTable(),
    gfmTaskListItem()
  ]);
}
const emptyOptions$1 = {};
function remarkGfm(options) {
  const self = (
    /** @type {Processor} */
    this
  );
  const settings = options || emptyOptions$1;
  const data = self.data();
  const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = []);
  const fromMarkdownExtensions = data.fromMarkdownExtensions || (data.fromMarkdownExtensions = []);
  const toMarkdownExtensions = data.toMarkdownExtensions || (data.toMarkdownExtensions = []);
  micromarkExtensions.push(gfm(settings));
  fromMarkdownExtensions.push(gfmFromMarkdown());
  toMarkdownExtensions.push(gfmToMarkdown(settings));
}
function newlineToBreak(tree) {
  findAndReplace(tree, [/\r?\n|\r/g, replace]);
}
function replace() {
  return { type: "break" };
}
function remarkBreaks() {
  return function(tree) {
    newlineToBreak(tree);
  };
}
const emptyOptions = {};
function toString(value, options) {
  const settings = options || emptyOptions;
  const includeImageAlt = typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true;
  const includeHtml = typeof settings.includeHtml === "boolean" ? settings.includeHtml : true;
  return one$1(value, includeImageAlt, includeHtml);
}
function one$1(value, includeImageAlt, includeHtml) {
  if (node(value)) {
    if ("value" in value) {
      return value.type === "html" && !includeHtml ? "" : value.value;
    }
    if (includeImageAlt && "alt" in value && value.alt) {
      return value.alt;
    }
    if ("children" in value) {
      return all(value.children, includeImageAlt, includeHtml);
    }
  }
  if (Array.isArray(value)) {
    return all(value, includeImageAlt, includeHtml);
  }
  return "";
}
function all(values, includeImageAlt, includeHtml) {
  const result = [];
  let index2 = -1;
  while (++index2 < values.length) {
    result[index2] = one$1(values[index2], includeImageAlt, includeHtml);
  }
  return result.join("");
}
function node(value) {
  return Boolean(value && typeof value === "object");
}
const convert$1 = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  function(test) {
    if (test === void 0 || test === null) {
      return ok$2;
    }
    if (typeof test === "string") {
      return typeFactory$1(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory$1(test) : propsFactory$1(test);
    }
    if (typeof test === "function") {
      return castFactory$1(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory$1(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert$1(tests[index2]);
  }
  return castFactory$1(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory$1(check) {
  return castFactory$1(all2);
  function all2(node2) {
    let key2;
    for (key2 in check) {
      if (node2[key2] !== check[key2])
        return false;
    }
    return true;
  }
}
function typeFactory$1(check) {
  return castFactory$1(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory$1(check) {
  return assertion;
  function assertion(node2, ...parameters) {
    return Boolean(
      node2 && typeof node2 === "object" && "type" in node2 && // @ts-expect-error: fine.
      Boolean(check.call(this, node2, ...parameters))
    );
  }
}
function ok$2() {
  return true;
}
function color$1(d) {
  return d;
}
const CONTINUE$1 = true;
const EXIT$1 = false;
const SKIP$1 = "skip";
const visitParents$1 = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    const is = convert$1(test);
    const step = reverse ? -1 : 1;
    factory2(tree, void 0, [])();
    function factory2(node2, index2, parents) {
      const value = node2 && typeof node2 === "object" ? node2 : {};
      if (typeof value.type === "string") {
        const name = (
          // `hast`
          typeof value.tagName === "string" ? value.tagName : (
            // `xast`
            typeof value.name === "string" ? value.name : void 0
          )
        );
        Object.defineProperty(visit2, "name", {
          value: "node (" + color$1(node2.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = [];
        let subresult;
        let offset;
        let grandparents;
        if (!test || is(node2, index2, parents[parents.length - 1] || null)) {
          result = toResult$1(visitor(node2, parents));
          if (result[0] === EXIT$1) {
            return result;
          }
        }
        if (node2.children && result[0] !== SKIP$1) {
          offset = (reverse ? node2.children.length : -1) + step;
          grandparents = parents.concat(node2);
          while (offset > -1 && offset < node2.children.length) {
            subresult = factory2(node2.children[offset], offset, grandparents)();
            if (subresult[0] === EXIT$1) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
        return result;
      }
    }
  }
);
function toResult$1(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE$1, value];
  }
  return [value];
}
const visit$1 = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    visitParents$1(tree, test, overload, reverse);
    function overload(node2, parents) {
      const parent = parents[parents.length - 1];
      return visitor(
        node2,
        parent ? parent.children.indexOf(node2) : null,
        parent
      );
    }
  }
);
var regex$1 = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
const regex = regex$1;
var githubSlugger = BananaSlug;
const own = Object.hasOwnProperty;
function BananaSlug() {
  const self = this;
  if (!(self instanceof BananaSlug))
    return new BananaSlug();
  self.reset();
}
BananaSlug.prototype.slug = function(value, maintainCase) {
  const self = this;
  let slug = slugger(value, maintainCase === true);
  const originalSlug = slug;
  while (own.call(self.occurrences, slug)) {
    self.occurrences[originalSlug]++;
    slug = originalSlug + "-" + self.occurrences[originalSlug];
  }
  self.occurrences[slug] = 0;
  return slug;
};
BananaSlug.prototype.reset = function() {
  this.occurrences = /* @__PURE__ */ Object.create(null);
};
function slugger(string, maintainCase) {
  if (typeof string !== "string")
    return "";
  if (!maintainCase)
    string = string.toLowerCase();
  return string.replace(regex, "").replace(/ /g, "-");
}
BananaSlug.slug = slugger;
const BananaSlug$1 = /* @__PURE__ */ getDefaultExportFromCjs(githubSlugger);
const slugs = new BananaSlug$1();
function remarkSlug() {
  return (tree) => {
    slugs.reset();
    visit$1(tree, "heading", (node2) => {
      const data = node2.data || (node2.data = {});
      const props = (
        /** @type {Properties} */
        data.hProperties || (data.hProperties = {})
      );
      let id2 = props.id;
      id2 = id2 ? slugs.slug(String(id2), true) : slugs.slug(toString(node2));
      data.id = id2;
      props.id = id2;
    });
  };
}
const convert = (
  /**
   * @type {(
   *   (<Kind extends Node>(test: PredicateTest<Kind>) => AssertPredicate<Kind>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {AssertAnything}
   */
  function(test) {
    if (test === void 0 || test === null) {
      return ok$1;
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  }
);
function anyFactory(tests) {
  const checks = [];
  let index2 = -1;
  while (++index2 < tests.length) {
    checks[index2] = convert(tests[index2]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index3 = -1;
    while (++index3 < checks.length) {
      if (checks[index3].call(this, ...parameters))
        return true;
    }
    return false;
  }
}
function propsFactory(check) {
  return castFactory(all2);
  function all2(node2) {
    let key2;
    for (key2 in check) {
      if (node2[key2] !== check[key2])
        return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node2) {
    return node2 && node2.type === check;
  }
}
function castFactory(check) {
  return assertion;
  function assertion(node2, ...parameters) {
    return Boolean(
      node2 && typeof node2 === "object" && "type" in node2 && // @ts-expect-error: fine.
      Boolean(check.call(this, node2, ...parameters))
    );
  }
}
function ok$1() {
  return true;
}
function color(d) {
  return d;
}
const CONTINUE = true;
const EXIT = false;
const SKIP = "skip";
const visitParents = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor<Node>} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    const is = convert(test);
    const step = reverse ? -1 : 1;
    factory2(tree, void 0, [])();
    function factory2(node2, index2, parents) {
      const value = node2 && typeof node2 === "object" ? node2 : {};
      if (typeof value.type === "string") {
        const name = (
          // `hast`
          typeof value.tagName === "string" ? value.tagName : (
            // `xast`
            typeof value.name === "string" ? value.name : void 0
          )
        );
        Object.defineProperty(visit2, "name", {
          value: "node (" + color(node2.type + (name ? "<" + name + ">" : "")) + ")"
        });
      }
      return visit2;
      function visit2() {
        let result = [];
        let subresult;
        let offset;
        let grandparents;
        if (!test || is(node2, index2, parents[parents.length - 1] || null)) {
          result = toResult(visitor(node2, parents));
          if (result[0] === EXIT) {
            return result;
          }
        }
        if (node2.children && result[0] !== SKIP) {
          offset = (reverse ? node2.children.length : -1) + step;
          grandparents = parents.concat(node2);
          while (offset > -1 && offset < node2.children.length) {
            subresult = factory2(node2.children[offset], offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
        return result;
      }
    }
  }
);
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return [value];
}
const visit = (
  /**
   * @type {(
   *   (<Tree extends Node, Check extends Test>(tree: Tree, test: Check, visitor: BuildVisitor<Tree, Check>, reverse?: boolean | null | undefined) => void) &
   *   (<Tree extends Node>(tree: Tree, visitor: BuildVisitor<Tree>, reverse?: boolean | null | undefined) => void)
   * )}
   */
  /**
   * @param {Node} tree
   * @param {Test} test
   * @param {Visitor} visitor
   * @param {boolean | null | undefined} [reverse]
   * @returns {void}
   */
  function(tree, test, visitor, reverse) {
    if (typeof test === "function" && typeof visitor !== "function") {
      reverse = visitor;
      visitor = test;
      test = null;
    }
    visitParents(tree, test, overload, reverse);
    function overload(node2, parents) {
      const parent = parents[parents.length - 1];
      return visitor(
        node2,
        parent ? parent.children.indexOf(node2) : null,
        parent
      );
    }
  }
);
var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;
var isArray = function isArray2(arr) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(arr);
  }
  return toStr.call(arr) === "[object Array]";
};
var isPlainObject = function isPlainObject2(obj) {
  if (!obj || toStr.call(obj) !== "[object Object]") {
    return false;
  }
  var hasOwnConstructor = hasOwn.call(obj, "constructor");
  var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, "isPrototypeOf");
  if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
    return false;
  }
  var key2;
  for (key2 in obj) {
  }
  return typeof key2 === "undefined" || hasOwn.call(obj, key2);
};
var setProperty = function setProperty2(target, options) {
  if (defineProperty && options.name === "__proto__") {
    defineProperty(target, options.name, {
      enumerable: true,
      configurable: true,
      value: options.newValue,
      writable: true
    });
  } else {
    target[options.name] = options.newValue;
  }
};
var getProperty = function getProperty2(obj, name) {
  if (name === "__proto__") {
    if (!hasOwn.call(obj, name)) {
      return void 0;
    } else if (gOPD) {
      return gOPD(obj, name).value;
    }
  }
  return obj[name];
};
var extend = function extend2() {
  var options, name, src, copy2, copyIsArray, clone;
  var target = arguments[0];
  var i = 1;
  var length = arguments.length;
  var deep = false;
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    i = 2;
  }
  if (target == null || typeof target !== "object" && typeof target !== "function") {
    target = {};
  }
  for (; i < length; ++i) {
    options = arguments[i];
    if (options != null) {
      for (name in options) {
        src = getProperty(target, name);
        copy2 = getProperty(options, name);
        if (target !== copy2) {
          if (deep && copy2 && (isPlainObject(copy2) || (copyIsArray = isArray(copy2)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && isArray(src) ? src : [];
            } else {
              clone = src && isPlainObject(src) ? src : {};
            }
            setProperty(target, { name, newValue: extend2(deep, clone, copy2) });
          } else if (typeof copy2 !== "undefined") {
            setProperty(target, { name, newValue: copy2 });
          }
        }
      }
    }
  }
  return target;
};
const extend$1 = /* @__PURE__ */ getDefaultExportFromCjs(extend);
const contentDefaults = {
  type: "element",
  tagName: "span",
  properties: { className: ["icon", "icon-link"] },
  children: []
};
function rehypeAutolinkHeadings(options = {}) {
  let props = options.linkProperties;
  const behavior = "behavior" in options && options.behavior || "prepend";
  const content = "content" in options && options.content || contentDefaults;
  const group = "group" in options ? options.group : void 0;
  let method;
  if (behavior === "wrap") {
    method = wrap;
  } else if (behavior === "before" || behavior === "after") {
    method = around;
  } else {
    if (!props) {
      props = { ariaHidden: "true", tabIndex: -1 };
    }
    method = inject;
  }
  return (tree) => {
    visit(tree, "heading", method);
  };
  function inject(node2) {
    const url = getUrl(node2);
    if (url) {
      const link2 = create(url);
      link2.data = Object.assign({}, link2.data, {
        hProperties: extend$1(true, {}, props),
        hChildren: toChildren(content, node2)
      });
      node2.children[behavior === "prepend" ? "unshift" : "push"](link2);
    }
  }
  function around(node2, index2, parent) {
    const url = getUrl(node2);
    if (url && typeof index2 === "number" && parent) {
      const link2 = create(url);
      const grouping = group ? toGrouping(group, node2) : void 0;
      link2.data = Object.assign({}, link2.data, {
        hProperties: extend$1(true, {}, props),
        hChildren: toChildren(content, node2)
      });
      let nodes = behavior === "before" ? [link2, node2] : [node2, link2];
      if (grouping) {
        grouping.children = nodes;
        nodes = [grouping];
      }
      parent.children.splice(index2, 1, ...nodes);
      return [SKIP, index2 + nodes.length];
    }
  }
  function wrap(node2) {
    const url = getUrl(node2);
    if (url) {
      const link2 = create(url, toStaticPhrasingContent(node2.children));
      link2.data = { hProperties: extend$1(true, {}, props) };
      node2.children = [link2];
    }
  }
  function toNode(value, node2) {
    return typeof value === "function" ? value(node2) : value;
  }
  function toChildren(value, node2) {
    const result = toNode(value, node2);
    const children = Array.isArray(result) ? result : [result];
    return typeof value === "function" ? children : extend$1(true, [], children);
  }
  function toGrouping(value, node2) {
    const grouping = toNode(value, node2);
    if (Array.isArray(grouping) || grouping.type !== "element") {
      throw new Error("Expected element as grouping");
    }
    const hName = grouping.tagName;
    const hProperties = grouping.properties;
    return {
      // @ts-expect-error: custom node.
      type: "heading-group",
      data: {
        hName,
        hProperties: typeof value === "function" ? extend$1(true, {}, hProperties) : hProperties
      },
      children: []
    };
  }
  function create(url, children) {
    return {
      type: "link",
      url,
      title: null,
      children: children || []
    };
  }
  function getUrl(node2) {
    const data = node2.data || {};
    const props2 = (
      /** @type {Properties} */
      data.hProperties
    );
    const id2 = props2 && props2.id;
    return id2 ? "#" + id2 : void 0;
  }
  function toStaticPhrasingContent(nodes) {
    let result = [];
    let index2 = -1;
    if (nodes) {
      while (++index2 < nodes.length) {
        result = result.concat(toStaticPhrasingContentOne(nodes[index2]));
      }
    }
    return result;
  }
  function toStaticPhrasingContentOne(node2) {
    if (node2.type === "link" || node2.type === "linkReference" || node2.type === "footnote" || node2.type === "footnoteReference") {
      return toStaticPhrasingContent(node2.children);
    }
    if ("children" in node2) {
      const { children, position: position2, ...copy3 } = node2;
      return Object.assign(extend$1(true, {}, copy3), {
        children: toStaticPhrasingContent(node2.children)
      });
    }
    const { position, ...copy2 } = node2;
    return extend$1(true, {}, copy2);
  }
}
var dist = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  const typedArrayTypeNames = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function isTypedArrayName(name) {
    return typedArrayTypeNames.includes(name);
  }
  const objectTypeNames = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    ...typedArrayTypeNames
  ];
  function isObjectTypeName(name) {
    return objectTypeNames.includes(name);
  }
  const primitiveTypeNames = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol"
  ];
  function isPrimitiveTypeName(name) {
    return primitiveTypeNames.includes(name);
  }
  function isOfType(type) {
    return (value) => typeof value === type;
  }
  const { toString: toString2 } = Object.prototype;
  const getObjectType = (value) => {
    const objectTypeName = toString2.call(value).slice(8, -1);
    if (/HTML\w+Element/.test(objectTypeName) && is.domElement(value)) {
      return "HTMLElement";
    }
    if (isObjectTypeName(objectTypeName)) {
      return objectTypeName;
    }
    return void 0;
  };
  const isObjectOfType = (type) => (value) => getObjectType(value) === type;
  function is(value) {
    if (value === null) {
      return "null";
    }
    switch (typeof value) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (is.observable(value)) {
      return "Observable";
    }
    if (is.array(value)) {
      return "Array";
    }
    if (is.buffer(value)) {
      return "Buffer";
    }
    const tagType = getObjectType(value);
    if (tagType) {
      return tagType;
    }
    if (value instanceof String || value instanceof Boolean || value instanceof Number) {
      throw new TypeError("Please don't use object wrappers for primitive types");
    }
    return "Object";
  }
  is.undefined = isOfType("undefined");
  is.string = isOfType("string");
  const isNumberType = isOfType("number");
  is.number = (value) => isNumberType(value) && !is.nan(value);
  is.bigint = isOfType("bigint");
  is.function_ = isOfType("function");
  is.null_ = (value) => value === null;
  is.class_ = (value) => is.function_(value) && value.toString().startsWith("class ");
  is.boolean = (value) => value === true || value === false;
  is.symbol = isOfType("symbol");
  is.numericString = (value) => is.string(value) && !is.emptyStringOrWhitespace(value) && !Number.isNaN(Number(value));
  is.array = (value, assertion) => {
    if (!Array.isArray(value)) {
      return false;
    }
    if (!is.function_(assertion)) {
      return true;
    }
    return value.every(assertion);
  };
  is.buffer = (value) => {
    var _a, _b, _c, _d;
    return (_d = (_c = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.constructor) === null || _b === void 0 ? void 0 : _b.isBuffer) === null || _c === void 0 ? void 0 : _c.call(_b, value)) !== null && _d !== void 0 ? _d : false;
  };
  is.blob = (value) => isObjectOfType("Blob")(value);
  is.nullOrUndefined = (value) => is.null_(value) || is.undefined(value);
  is.object = (value) => !is.null_(value) && (typeof value === "object" || is.function_(value));
  is.iterable = (value) => {
    var _a;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.iterator]);
  };
  is.asyncIterable = (value) => {
    var _a;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a[Symbol.asyncIterator]);
  };
  is.generator = (value) => {
    var _a, _b;
    return is.iterable(value) && is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.next) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.throw);
  };
  is.asyncGenerator = (value) => is.asyncIterable(value) && is.function_(value.next) && is.function_(value.throw);
  is.nativePromise = (value) => isObjectOfType("Promise")(value);
  const hasPromiseAPI = (value) => {
    var _a, _b;
    return is.function_((_a = value) === null || _a === void 0 ? void 0 : _a.then) && is.function_((_b = value) === null || _b === void 0 ? void 0 : _b.catch);
  };
  is.promise = (value) => is.nativePromise(value) || hasPromiseAPI(value);
  is.generatorFunction = isObjectOfType("GeneratorFunction");
  is.asyncGeneratorFunction = (value) => getObjectType(value) === "AsyncGeneratorFunction";
  is.asyncFunction = (value) => getObjectType(value) === "AsyncFunction";
  is.boundFunction = (value) => is.function_(value) && !value.hasOwnProperty("prototype");
  is.regExp = isObjectOfType("RegExp");
  is.date = isObjectOfType("Date");
  is.error = isObjectOfType("Error");
  is.map = (value) => isObjectOfType("Map")(value);
  is.set = (value) => isObjectOfType("Set")(value);
  is.weakMap = (value) => isObjectOfType("WeakMap")(value);
  is.weakSet = (value) => isObjectOfType("WeakSet")(value);
  is.int8Array = isObjectOfType("Int8Array");
  is.uint8Array = isObjectOfType("Uint8Array");
  is.uint8ClampedArray = isObjectOfType("Uint8ClampedArray");
  is.int16Array = isObjectOfType("Int16Array");
  is.uint16Array = isObjectOfType("Uint16Array");
  is.int32Array = isObjectOfType("Int32Array");
  is.uint32Array = isObjectOfType("Uint32Array");
  is.float32Array = isObjectOfType("Float32Array");
  is.float64Array = isObjectOfType("Float64Array");
  is.bigInt64Array = isObjectOfType("BigInt64Array");
  is.bigUint64Array = isObjectOfType("BigUint64Array");
  is.arrayBuffer = isObjectOfType("ArrayBuffer");
  is.sharedArrayBuffer = isObjectOfType("SharedArrayBuffer");
  is.dataView = isObjectOfType("DataView");
  is.enumCase = (value, targetEnum) => Object.values(targetEnum).includes(value);
  is.directInstanceOf = (instance, class_) => Object.getPrototypeOf(instance) === class_.prototype;
  is.urlInstance = (value) => isObjectOfType("URL")(value);
  is.urlString = (value) => {
    if (!is.string(value)) {
      return false;
    }
    try {
      new URL(value);
      return true;
    } catch (_a) {
      return false;
    }
  };
  is.truthy = (value) => Boolean(value);
  is.falsy = (value) => !value;
  is.nan = (value) => Number.isNaN(value);
  is.primitive = (value) => is.null_(value) || isPrimitiveTypeName(typeof value);
  is.integer = (value) => Number.isInteger(value);
  is.safeInteger = (value) => Number.isSafeInteger(value);
  is.plainObject = (value) => {
    if (toString2.call(value) !== "[object Object]") {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || prototype === Object.getPrototypeOf({});
  };
  is.typedArray = (value) => isTypedArrayName(getObjectType(value));
  const isValidLength = (value) => is.safeInteger(value) && value >= 0;
  is.arrayLike = (value) => !is.nullOrUndefined(value) && !is.function_(value) && isValidLength(value.length);
  is.inRange = (value, range) => {
    if (is.number(range)) {
      return value >= Math.min(0, range) && value <= Math.max(range, 0);
    }
    if (is.array(range) && range.length === 2) {
      return value >= Math.min(...range) && value <= Math.max(...range);
    }
    throw new TypeError(`Invalid range: ${JSON.stringify(range)}`);
  };
  const NODE_TYPE_ELEMENT = 1;
  const DOM_PROPERTIES_TO_CHECK = [
    "innerHTML",
    "ownerDocument",
    "style",
    "attributes",
    "nodeValue"
  ];
  is.domElement = (value) => {
    return is.object(value) && value.nodeType === NODE_TYPE_ELEMENT && is.string(value.nodeName) && !is.plainObject(value) && DOM_PROPERTIES_TO_CHECK.every((property) => property in value);
  };
  is.observable = (value) => {
    var _a, _b, _c, _d;
    if (!value) {
      return false;
    }
    if (value === ((_b = (_a = value)[Symbol.observable]) === null || _b === void 0 ? void 0 : _b.call(_a))) {
      return true;
    }
    if (value === ((_d = (_c = value)["@@observable"]) === null || _d === void 0 ? void 0 : _d.call(_c))) {
      return true;
    }
    return false;
  };
  is.nodeStream = (value) => is.object(value) && is.function_(value.pipe) && !is.observable(value);
  is.infinite = (value) => value === Infinity || value === -Infinity;
  const isAbsoluteMod2 = (remainder) => (value) => is.integer(value) && Math.abs(value % 2) === remainder;
  is.evenInteger = isAbsoluteMod2(0);
  is.oddInteger = isAbsoluteMod2(1);
  is.emptyArray = (value) => is.array(value) && value.length === 0;
  is.nonEmptyArray = (value) => is.array(value) && value.length > 0;
  is.emptyString = (value) => is.string(value) && value.length === 0;
  const isWhiteSpaceString = (value) => is.string(value) && !/\S/.test(value);
  is.emptyStringOrWhitespace = (value) => is.emptyString(value) || isWhiteSpaceString(value);
  is.nonEmptyString = (value) => is.string(value) && value.length > 0;
  is.nonEmptyStringAndNotWhitespace = (value) => is.string(value) && !is.emptyStringOrWhitespace(value);
  is.emptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0;
  is.nonEmptyObject = (value) => is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length > 0;
  is.emptySet = (value) => is.set(value) && value.size === 0;
  is.nonEmptySet = (value) => is.set(value) && value.size > 0;
  is.emptyMap = (value) => is.map(value) && value.size === 0;
  is.nonEmptyMap = (value) => is.map(value) && value.size > 0;
  is.propertyKey = (value) => is.any([is.string, is.number, is.symbol], value);
  is.formData = (value) => isObjectOfType("FormData")(value);
  is.urlSearchParams = (value) => isObjectOfType("URLSearchParams")(value);
  const predicateOnArray = (method, predicate, values) => {
    if (!is.function_(predicate)) {
      throw new TypeError(`Invalid predicate: ${JSON.stringify(predicate)}`);
    }
    if (values.length === 0) {
      throw new TypeError("Invalid number of values");
    }
    return method.call(values, predicate);
  };
  is.any = (predicate, ...values) => {
    const predicates = is.array(predicate) ? predicate : [predicate];
    return predicates.some((singlePredicate) => predicateOnArray(Array.prototype.some, singlePredicate, values));
  };
  is.all = (predicate, ...values) => predicateOnArray(Array.prototype.every, predicate, values);
  const assertType = (condition, description, value, options = {}) => {
    if (!condition) {
      const { multipleValues } = options;
      const valuesMessage = multipleValues ? `received values of types ${[
        ...new Set(value.map((singleValue) => `\`${is(singleValue)}\``))
      ].join(", ")}` : `received value of type \`${is(value)}\``;
      throw new TypeError(`Expected value which is \`${description}\`, ${valuesMessage}.`);
    }
  };
  exports.assert = {
    // Unknowns.
    undefined: (value) => assertType(is.undefined(value), "undefined", value),
    string: (value) => assertType(is.string(value), "string", value),
    number: (value) => assertType(is.number(value), "number", value),
    bigint: (value) => assertType(is.bigint(value), "bigint", value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (value) => assertType(is.function_(value), "Function", value),
    null_: (value) => assertType(is.null_(value), "null", value),
    class_: (value) => assertType(is.class_(value), "Class", value),
    boolean: (value) => assertType(is.boolean(value), "boolean", value),
    symbol: (value) => assertType(is.symbol(value), "symbol", value),
    numericString: (value) => assertType(is.numericString(value), "string with a number", value),
    array: (value, assertion) => {
      const assert = assertType;
      assert(is.array(value), "Array", value);
      if (assertion) {
        value.forEach(assertion);
      }
    },
    buffer: (value) => assertType(is.buffer(value), "Buffer", value),
    blob: (value) => assertType(is.blob(value), "Blob", value),
    nullOrUndefined: (value) => assertType(is.nullOrUndefined(value), "null or undefined", value),
    object: (value) => assertType(is.object(value), "Object", value),
    iterable: (value) => assertType(is.iterable(value), "Iterable", value),
    asyncIterable: (value) => assertType(is.asyncIterable(value), "AsyncIterable", value),
    generator: (value) => assertType(is.generator(value), "Generator", value),
    asyncGenerator: (value) => assertType(is.asyncGenerator(value), "AsyncGenerator", value),
    nativePromise: (value) => assertType(is.nativePromise(value), "native Promise", value),
    promise: (value) => assertType(is.promise(value), "Promise", value),
    generatorFunction: (value) => assertType(is.generatorFunction(value), "GeneratorFunction", value),
    asyncGeneratorFunction: (value) => assertType(is.asyncGeneratorFunction(value), "AsyncGeneratorFunction", value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (value) => assertType(is.asyncFunction(value), "AsyncFunction", value),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (value) => assertType(is.boundFunction(value), "Function", value),
    regExp: (value) => assertType(is.regExp(value), "RegExp", value),
    date: (value) => assertType(is.date(value), "Date", value),
    error: (value) => assertType(is.error(value), "Error", value),
    map: (value) => assertType(is.map(value), "Map", value),
    set: (value) => assertType(is.set(value), "Set", value),
    weakMap: (value) => assertType(is.weakMap(value), "WeakMap", value),
    weakSet: (value) => assertType(is.weakSet(value), "WeakSet", value),
    int8Array: (value) => assertType(is.int8Array(value), "Int8Array", value),
    uint8Array: (value) => assertType(is.uint8Array(value), "Uint8Array", value),
    uint8ClampedArray: (value) => assertType(is.uint8ClampedArray(value), "Uint8ClampedArray", value),
    int16Array: (value) => assertType(is.int16Array(value), "Int16Array", value),
    uint16Array: (value) => assertType(is.uint16Array(value), "Uint16Array", value),
    int32Array: (value) => assertType(is.int32Array(value), "Int32Array", value),
    uint32Array: (value) => assertType(is.uint32Array(value), "Uint32Array", value),
    float32Array: (value) => assertType(is.float32Array(value), "Float32Array", value),
    float64Array: (value) => assertType(is.float64Array(value), "Float64Array", value),
    bigInt64Array: (value) => assertType(is.bigInt64Array(value), "BigInt64Array", value),
    bigUint64Array: (value) => assertType(is.bigUint64Array(value), "BigUint64Array", value),
    arrayBuffer: (value) => assertType(is.arrayBuffer(value), "ArrayBuffer", value),
    sharedArrayBuffer: (value) => assertType(is.sharedArrayBuffer(value), "SharedArrayBuffer", value),
    dataView: (value) => assertType(is.dataView(value), "DataView", value),
    enumCase: (value, targetEnum) => assertType(is.enumCase(value, targetEnum), "EnumCase", value),
    urlInstance: (value) => assertType(is.urlInstance(value), "URL", value),
    urlString: (value) => assertType(is.urlString(value), "string with a URL", value),
    truthy: (value) => assertType(is.truthy(value), "truthy", value),
    falsy: (value) => assertType(is.falsy(value), "falsy", value),
    nan: (value) => assertType(is.nan(value), "NaN", value),
    primitive: (value) => assertType(is.primitive(value), "primitive", value),
    integer: (value) => assertType(is.integer(value), "integer", value),
    safeInteger: (value) => assertType(is.safeInteger(value), "integer", value),
    plainObject: (value) => assertType(is.plainObject(value), "plain object", value),
    typedArray: (value) => assertType(is.typedArray(value), "TypedArray", value),
    arrayLike: (value) => assertType(is.arrayLike(value), "array-like", value),
    domElement: (value) => assertType(is.domElement(value), "HTMLElement", value),
    observable: (value) => assertType(is.observable(value), "Observable", value),
    nodeStream: (value) => assertType(is.nodeStream(value), "Node.js Stream", value),
    infinite: (value) => assertType(is.infinite(value), "infinite number", value),
    emptyArray: (value) => assertType(is.emptyArray(value), "empty array", value),
    nonEmptyArray: (value) => assertType(is.nonEmptyArray(value), "non-empty array", value),
    emptyString: (value) => assertType(is.emptyString(value), "empty string", value),
    emptyStringOrWhitespace: (value) => assertType(is.emptyStringOrWhitespace(value), "empty string or whitespace", value),
    nonEmptyString: (value) => assertType(is.nonEmptyString(value), "non-empty string", value),
    nonEmptyStringAndNotWhitespace: (value) => assertType(is.nonEmptyStringAndNotWhitespace(value), "non-empty string and not whitespace", value),
    emptyObject: (value) => assertType(is.emptyObject(value), "empty object", value),
    nonEmptyObject: (value) => assertType(is.nonEmptyObject(value), "non-empty object", value),
    emptySet: (value) => assertType(is.emptySet(value), "empty set", value),
    nonEmptySet: (value) => assertType(is.nonEmptySet(value), "non-empty set", value),
    emptyMap: (value) => assertType(is.emptyMap(value), "empty map", value),
    nonEmptyMap: (value) => assertType(is.nonEmptyMap(value), "non-empty map", value),
    propertyKey: (value) => assertType(is.propertyKey(value), "PropertyKey", value),
    formData: (value) => assertType(is.formData(value), "FormData", value),
    urlSearchParams: (value) => assertType(is.urlSearchParams(value), "URLSearchParams", value),
    // Numbers.
    evenInteger: (value) => assertType(is.evenInteger(value), "even integer", value),
    oddInteger: (value) => assertType(is.oddInteger(value), "odd integer", value),
    // Two arguments.
    directInstanceOf: (instance, class_) => assertType(is.directInstanceOf(instance, class_), "T", instance),
    inRange: (value, range) => assertType(is.inRange(value, range), "in range", value),
    // Variadic functions.
    any: (predicate, ...values) => {
      return assertType(is.any(predicate, ...values), "predicate returns truthy for any value", values, { multipleValues: true });
    },
    all: (predicate, ...values) => assertType(is.all(predicate, ...values), "predicate returns truthy for all values", values, { multipleValues: true })
  };
  Object.defineProperties(is, {
    class: {
      value: is.class_
    },
    function: {
      value: is.function_
    },
    null: {
      value: is.null_
    }
  });
  Object.defineProperties(exports.assert, {
    class: {
      value: exports.assert.class_
    },
    function: {
      value: exports.assert.function_
    },
    null: {
      value: exports.assert.null_
    }
  });
  exports.default = is;
  module.exports = is;
  module.exports.default = is;
  module.exports.assert = exports.assert;
})(dist, dist.exports);
var distExports = dist.exports;
const grinning = {
  keywords: [
    "face",
    "smile",
    "happy",
    "joy",
    ":D",
    "grin"
  ],
  char: "😀",
  fitzpatrick_scale: false,
  category: "people"
};
const grimacing = {
  keywords: [
    "face",
    "grimace",
    "teeth"
  ],
  char: "😬",
  fitzpatrick_scale: false,
  category: "people"
};
const grin = {
  keywords: [
    "face",
    "happy",
    "smile",
    "joy",
    "kawaii"
  ],
  char: "😁",
  fitzpatrick_scale: false,
  category: "people"
};
const joy = {
  keywords: [
    "face",
    "cry",
    "tears",
    "weep",
    "happy",
    "happytears",
    "haha"
  ],
  char: "😂",
  fitzpatrick_scale: false,
  category: "people"
};
const rofl = {
  keywords: [
    "face",
    "rolling",
    "floor",
    "laughing",
    "lol",
    "haha"
  ],
  char: "🤣",
  fitzpatrick_scale: false,
  category: "people"
};
const partying = {
  keywords: [
    "face",
    "celebration",
    "woohoo"
  ],
  char: "🥳",
  fitzpatrick_scale: false,
  category: "people"
};
const smiley = {
  keywords: [
    "face",
    "happy",
    "joy",
    "haha",
    ":D",
    ":)",
    "smile",
    "funny"
  ],
  char: "😃",
  fitzpatrick_scale: false,
  category: "people"
};
const smile = {
  keywords: [
    "face",
    "happy",
    "joy",
    "funny",
    "haha",
    "laugh",
    "like",
    ":D",
    ":)"
  ],
  char: "😄",
  fitzpatrick_scale: false,
  category: "people"
};
const sweat_smile = {
  keywords: [
    "face",
    "hot",
    "happy",
    "laugh",
    "sweat",
    "smile",
    "relief"
  ],
  char: "😅",
  fitzpatrick_scale: false,
  category: "people"
};
const laughing = {
  keywords: [
    "happy",
    "joy",
    "lol",
    "satisfied",
    "haha",
    "face",
    "glad",
    "XD",
    "laugh"
  ],
  char: "😆",
  fitzpatrick_scale: false,
  category: "people"
};
const innocent = {
  keywords: [
    "face",
    "angel",
    "heaven",
    "halo"
  ],
  char: "😇",
  fitzpatrick_scale: false,
  category: "people"
};
const wink = {
  keywords: [
    "face",
    "happy",
    "mischievous",
    "secret",
    ";)",
    "smile",
    "eye"
  ],
  char: "😉",
  fitzpatrick_scale: false,
  category: "people"
};
const blush = {
  keywords: [
    "face",
    "smile",
    "happy",
    "flushed",
    "crush",
    "embarrassed",
    "shy",
    "joy"
  ],
  char: "😊",
  fitzpatrick_scale: false,
  category: "people"
};
const slightly_smiling_face = {
  keywords: [
    "face",
    "smile"
  ],
  char: "🙂",
  fitzpatrick_scale: false,
  category: "people"
};
const upside_down_face = {
  keywords: [
    "face",
    "flipped",
    "silly",
    "smile"
  ],
  char: "🙃",
  fitzpatrick_scale: false,
  category: "people"
};
const relaxed = {
  keywords: [
    "face",
    "blush",
    "massage",
    "happiness"
  ],
  char: "☺️",
  fitzpatrick_scale: false,
  category: "people"
};
const yum = {
  keywords: [
    "happy",
    "joy",
    "tongue",
    "smile",
    "face",
    "silly",
    "yummy",
    "nom",
    "delicious",
    "savouring"
  ],
  char: "😋",
  fitzpatrick_scale: false,
  category: "people"
};
const relieved = {
  keywords: [
    "face",
    "relaxed",
    "phew",
    "massage",
    "happiness"
  ],
  char: "😌",
  fitzpatrick_scale: false,
  category: "people"
};
const heart_eyes = {
  keywords: [
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "crush",
    "heart"
  ],
  char: "😍",
  fitzpatrick_scale: false,
  category: "people"
};
const smiling_face_with_three_hearts = {
  keywords: [
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "crush",
    "hearts",
    "adore"
  ],
  char: "🥰",
  fitzpatrick_scale: false,
  category: "people"
};
const kissing_heart = {
  keywords: [
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  char: "😘",
  fitzpatrick_scale: false,
  category: "people"
};
const kissing = {
  keywords: [
    "love",
    "like",
    "face",
    "3",
    "valentines",
    "infatuation",
    "kiss"
  ],
  char: "😗",
  fitzpatrick_scale: false,
  category: "people"
};
const kissing_smiling_eyes = {
  keywords: [
    "face",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  char: "😙",
  fitzpatrick_scale: false,
  category: "people"
};
const kissing_closed_eyes = {
  keywords: [
    "face",
    "love",
    "like",
    "affection",
    "valentines",
    "infatuation",
    "kiss"
  ],
  char: "😚",
  fitzpatrick_scale: false,
  category: "people"
};
const stuck_out_tongue_winking_eye = {
  keywords: [
    "face",
    "prank",
    "childish",
    "playful",
    "mischievous",
    "smile",
    "wink",
    "tongue"
  ],
  char: "😜",
  fitzpatrick_scale: false,
  category: "people"
};
const zany = {
  keywords: [
    "face",
    "goofy",
    "crazy"
  ],
  char: "🤪",
  fitzpatrick_scale: false,
  category: "people"
};
const raised_eyebrow = {
  keywords: [
    "face",
    "distrust",
    "scepticism",
    "disapproval",
    "disbelief",
    "surprise"
  ],
  char: "🤨",
  fitzpatrick_scale: false,
  category: "people"
};
const monocle = {
  keywords: [
    "face",
    "stuffy",
    "wealthy"
  ],
  char: "🧐",
  fitzpatrick_scale: false,
  category: "people"
};
const stuck_out_tongue_closed_eyes = {
  keywords: [
    "face",
    "prank",
    "playful",
    "mischievous",
    "smile",
    "tongue"
  ],
  char: "😝",
  fitzpatrick_scale: false,
  category: "people"
};
const stuck_out_tongue = {
  keywords: [
    "face",
    "prank",
    "childish",
    "playful",
    "mischievous",
    "smile",
    "tongue"
  ],
  char: "😛",
  fitzpatrick_scale: false,
  category: "people"
};
const money_mouth_face = {
  keywords: [
    "face",
    "rich",
    "dollar",
    "money"
  ],
  char: "🤑",
  fitzpatrick_scale: false,
  category: "people"
};
const nerd_face = {
  keywords: [
    "face",
    "nerdy",
    "geek",
    "dork"
  ],
  char: "🤓",
  fitzpatrick_scale: false,
  category: "people"
};
const sunglasses = {
  keywords: [
    "face",
    "cool",
    "smile",
    "summer",
    "beach",
    "sunglass"
  ],
  char: "😎",
  fitzpatrick_scale: false,
  category: "people"
};
const star_struck = {
  keywords: [
    "face",
    "smile",
    "starry",
    "eyes",
    "grinning"
  ],
  char: "🤩",
  fitzpatrick_scale: false,
  category: "people"
};
const clown_face = {
  keywords: [
    "face"
  ],
  char: "🤡",
  fitzpatrick_scale: false,
  category: "people"
};
const cowboy_hat_face = {
  keywords: [
    "face",
    "cowgirl",
    "hat"
  ],
  char: "🤠",
  fitzpatrick_scale: false,
  category: "people"
};
const hugs = {
  keywords: [
    "face",
    "smile",
    "hug"
  ],
  char: "🤗",
  fitzpatrick_scale: false,
  category: "people"
};
const smirk = {
  keywords: [
    "face",
    "smile",
    "mean",
    "prank",
    "smug",
    "sarcasm"
  ],
  char: "😏",
  fitzpatrick_scale: false,
  category: "people"
};
const no_mouth = {
  keywords: [
    "face",
    "hellokitty"
  ],
  char: "😶",
  fitzpatrick_scale: false,
  category: "people"
};
const neutral_face = {
  keywords: [
    "indifference",
    "meh",
    ":|",
    "neutral"
  ],
  char: "😐",
  fitzpatrick_scale: false,
  category: "people"
};
const expressionless = {
  keywords: [
    "face",
    "indifferent",
    "-_-",
    "meh",
    "deadpan"
  ],
  char: "😑",
  fitzpatrick_scale: false,
  category: "people"
};
const unamused = {
  keywords: [
    "indifference",
    "bored",
    "straight face",
    "serious",
    "sarcasm",
    "unimpressed",
    "skeptical",
    "dubious",
    "side_eye"
  ],
  char: "😒",
  fitzpatrick_scale: false,
  category: "people"
};
const roll_eyes = {
  keywords: [
    "face",
    "eyeroll",
    "frustrated"
  ],
  char: "🙄",
  fitzpatrick_scale: false,
  category: "people"
};
const thinking = {
  keywords: [
    "face",
    "hmmm",
    "think",
    "consider"
  ],
  char: "🤔",
  fitzpatrick_scale: false,
  category: "people"
};
const lying_face = {
  keywords: [
    "face",
    "lie",
    "pinocchio"
  ],
  char: "🤥",
  fitzpatrick_scale: false,
  category: "people"
};
const hand_over_mouth = {
  keywords: [
    "face",
    "whoops",
    "shock",
    "surprise"
  ],
  char: "🤭",
  fitzpatrick_scale: false,
  category: "people"
};
const shushing = {
  keywords: [
    "face",
    "quiet",
    "shhh"
  ],
  char: "🤫",
  fitzpatrick_scale: false,
  category: "people"
};
const symbols_over_mouth = {
  keywords: [
    "face",
    "swearing",
    "cursing",
    "cussing",
    "profanity",
    "expletive"
  ],
  char: "🤬",
  fitzpatrick_scale: false,
  category: "people"
};
const exploding_head = {
  keywords: [
    "face",
    "shocked",
    "mind",
    "blown"
  ],
  char: "🤯",
  fitzpatrick_scale: false,
  category: "people"
};
const flushed = {
  keywords: [
    "face",
    "blush",
    "shy",
    "flattered"
  ],
  char: "😳",
  fitzpatrick_scale: false,
  category: "people"
};
const disappointed = {
  keywords: [
    "face",
    "sad",
    "upset",
    "depressed",
    ":("
  ],
  char: "😞",
  fitzpatrick_scale: false,
  category: "people"
};
const worried = {
  keywords: [
    "face",
    "concern",
    "nervous",
    ":("
  ],
  char: "😟",
  fitzpatrick_scale: false,
  category: "people"
};
const angry = {
  keywords: [
    "mad",
    "face",
    "annoyed",
    "frustrated"
  ],
  char: "😠",
  fitzpatrick_scale: false,
  category: "people"
};
const rage = {
  keywords: [
    "angry",
    "mad",
    "hate",
    "despise"
  ],
  char: "😡",
  fitzpatrick_scale: false,
  category: "people"
};
const pensive = {
  keywords: [
    "face",
    "sad",
    "depressed",
    "upset"
  ],
  char: "😔",
  fitzpatrick_scale: false,
  category: "people"
};
const confused = {
  keywords: [
    "face",
    "indifference",
    "huh",
    "weird",
    "hmmm",
    ":/"
  ],
  char: "😕",
  fitzpatrick_scale: false,
  category: "people"
};
const slightly_frowning_face = {
  keywords: [
    "face",
    "frowning",
    "disappointed",
    "sad",
    "upset"
  ],
  char: "🙁",
  fitzpatrick_scale: false,
  category: "people"
};
const frowning_face = {
  keywords: [
    "face",
    "sad",
    "upset",
    "frown"
  ],
  char: "☹",
  fitzpatrick_scale: false,
  category: "people"
};
const persevere = {
  keywords: [
    "face",
    "sick",
    "no",
    "upset",
    "oops"
  ],
  char: "😣",
  fitzpatrick_scale: false,
  category: "people"
};
const confounded = {
  keywords: [
    "face",
    "confused",
    "sick",
    "unwell",
    "oops",
    ":S"
  ],
  char: "😖",
  fitzpatrick_scale: false,
  category: "people"
};
const tired_face = {
  keywords: [
    "sick",
    "whine",
    "upset",
    "frustrated"
  ],
  char: "😫",
  fitzpatrick_scale: false,
  category: "people"
};
const weary = {
  keywords: [
    "face",
    "tired",
    "sleepy",
    "sad",
    "frustrated",
    "upset"
  ],
  char: "😩",
  fitzpatrick_scale: false,
  category: "people"
};
const pleading = {
  keywords: [
    "face",
    "begging",
    "mercy"
  ],
  char: "🥺",
  fitzpatrick_scale: false,
  category: "people"
};
const triumph = {
  keywords: [
    "face",
    "gas",
    "phew",
    "proud",
    "pride"
  ],
  char: "😤",
  fitzpatrick_scale: false,
  category: "people"
};
const open_mouth = {
  keywords: [
    "face",
    "surprise",
    "impressed",
    "wow",
    "whoa",
    ":O"
  ],
  char: "😮",
  fitzpatrick_scale: false,
  category: "people"
};
const scream = {
  keywords: [
    "face",
    "munch",
    "scared",
    "omg"
  ],
  char: "😱",
  fitzpatrick_scale: false,
  category: "people"
};
const fearful = {
  keywords: [
    "face",
    "scared",
    "terrified",
    "nervous",
    "oops",
    "huh"
  ],
  char: "😨",
  fitzpatrick_scale: false,
  category: "people"
};
const cold_sweat = {
  keywords: [
    "face",
    "nervous",
    "sweat"
  ],
  char: "😰",
  fitzpatrick_scale: false,
  category: "people"
};
const hushed = {
  keywords: [
    "face",
    "woo",
    "shh"
  ],
  char: "😯",
  fitzpatrick_scale: false,
  category: "people"
};
const frowning = {
  keywords: [
    "face",
    "aw",
    "what"
  ],
  char: "😦",
  fitzpatrick_scale: false,
  category: "people"
};
const anguished = {
  keywords: [
    "face",
    "stunned",
    "nervous"
  ],
  char: "😧",
  fitzpatrick_scale: false,
  category: "people"
};
const cry = {
  keywords: [
    "face",
    "tears",
    "sad",
    "depressed",
    "upset",
    ":'("
  ],
  char: "😢",
  fitzpatrick_scale: false,
  category: "people"
};
const disappointed_relieved = {
  keywords: [
    "face",
    "phew",
    "sweat",
    "nervous"
  ],
  char: "😥",
  fitzpatrick_scale: false,
  category: "people"
};
const drooling_face = {
  keywords: [
    "face"
  ],
  char: "🤤",
  fitzpatrick_scale: false,
  category: "people"
};
const sleepy = {
  keywords: [
    "face",
    "tired",
    "rest",
    "nap"
  ],
  char: "😪",
  fitzpatrick_scale: false,
  category: "people"
};
const sweat = {
  keywords: [
    "face",
    "hot",
    "sad",
    "tired",
    "exercise"
  ],
  char: "😓",
  fitzpatrick_scale: false,
  category: "people"
};
const hot = {
  keywords: [
    "face",
    "feverish",
    "heat",
    "red",
    "sweating"
  ],
  char: "🥵",
  fitzpatrick_scale: false,
  category: "people"
};
const cold = {
  keywords: [
    "face",
    "blue",
    "freezing",
    "frozen",
    "frostbite",
    "icicles"
  ],
  char: "🥶",
  fitzpatrick_scale: false,
  category: "people"
};
const sob = {
  keywords: [
    "face",
    "cry",
    "tears",
    "sad",
    "upset",
    "depressed"
  ],
  char: "😭",
  fitzpatrick_scale: false,
  category: "people"
};
const dizzy_face = {
  keywords: [
    "spent",
    "unconscious",
    "xox",
    "dizzy"
  ],
  char: "😵",
  fitzpatrick_scale: false,
  category: "people"
};
const astonished = {
  keywords: [
    "face",
    "xox",
    "surprised",
    "poisoned"
  ],
  char: "😲",
  fitzpatrick_scale: false,
  category: "people"
};
const zipper_mouth_face = {
  keywords: [
    "face",
    "sealed",
    "zipper",
    "secret"
  ],
  char: "🤐",
  fitzpatrick_scale: false,
  category: "people"
};
const nauseated_face = {
  keywords: [
    "face",
    "vomit",
    "gross",
    "green",
    "sick",
    "throw up",
    "ill"
  ],
  char: "🤢",
  fitzpatrick_scale: false,
  category: "people"
};
const sneezing_face = {
  keywords: [
    "face",
    "gesundheit",
    "sneeze",
    "sick",
    "allergy"
  ],
  char: "🤧",
  fitzpatrick_scale: false,
  category: "people"
};
const vomiting = {
  keywords: [
    "face",
    "sick"
  ],
  char: "🤮",
  fitzpatrick_scale: false,
  category: "people"
};
const mask = {
  keywords: [
    "face",
    "sick",
    "ill",
    "disease"
  ],
  char: "😷",
  fitzpatrick_scale: false,
  category: "people"
};
const face_with_thermometer = {
  keywords: [
    "sick",
    "temperature",
    "thermometer",
    "cold",
    "fever"
  ],
  char: "🤒",
  fitzpatrick_scale: false,
  category: "people"
};
const face_with_head_bandage = {
  keywords: [
    "injured",
    "clumsy",
    "bandage",
    "hurt"
  ],
  char: "🤕",
  fitzpatrick_scale: false,
  category: "people"
};
const woozy = {
  keywords: [
    "face",
    "dizzy",
    "intoxicated",
    "tipsy",
    "wavy"
  ],
  char: "🥴",
  fitzpatrick_scale: false,
  category: "people"
};
const sleeping = {
  keywords: [
    "face",
    "tired",
    "sleepy",
    "night",
    "zzz"
  ],
  char: "😴",
  fitzpatrick_scale: false,
  category: "people"
};
const zzz = {
  keywords: [
    "sleepy",
    "tired",
    "dream"
  ],
  char: "💤",
  fitzpatrick_scale: false,
  category: "people"
};
const poop = {
  keywords: [
    "hankey",
    "shitface",
    "fail",
    "turd",
    "shit"
  ],
  char: "💩",
  fitzpatrick_scale: false,
  category: "people"
};
const smiling_imp = {
  keywords: [
    "devil",
    "horns"
  ],
  char: "😈",
  fitzpatrick_scale: false,
  category: "people"
};
const imp = {
  keywords: [
    "devil",
    "angry",
    "horns"
  ],
  char: "👿",
  fitzpatrick_scale: false,
  category: "people"
};
const japanese_ogre = {
  keywords: [
    "monster",
    "red",
    "mask",
    "halloween",
    "scary",
    "creepy",
    "devil",
    "demon",
    "japanese",
    "ogre"
  ],
  char: "👹",
  fitzpatrick_scale: false,
  category: "people"
};
const japanese_goblin = {
  keywords: [
    "red",
    "evil",
    "mask",
    "monster",
    "scary",
    "creepy",
    "japanese",
    "goblin"
  ],
  char: "👺",
  fitzpatrick_scale: false,
  category: "people"
};
const skull = {
  keywords: [
    "dead",
    "skeleton",
    "creepy",
    "death"
  ],
  char: "💀",
  fitzpatrick_scale: false,
  category: "people"
};
const ghost = {
  keywords: [
    "halloween",
    "spooky",
    "scary"
  ],
  char: "👻",
  fitzpatrick_scale: false,
  category: "people"
};
const alien = {
  keywords: [
    "UFO",
    "paul",
    "weird",
    "outer_space"
  ],
  char: "👽",
  fitzpatrick_scale: false,
  category: "people"
};
const robot = {
  keywords: [
    "computer",
    "machine",
    "bot"
  ],
  char: "🤖",
  fitzpatrick_scale: false,
  category: "people"
};
const smiley_cat = {
  keywords: [
    "animal",
    "cats",
    "happy",
    "smile"
  ],
  char: "😺",
  fitzpatrick_scale: false,
  category: "people"
};
const smile_cat = {
  keywords: [
    "animal",
    "cats",
    "smile"
  ],
  char: "😸",
  fitzpatrick_scale: false,
  category: "people"
};
const joy_cat = {
  keywords: [
    "animal",
    "cats",
    "haha",
    "happy",
    "tears"
  ],
  char: "😹",
  fitzpatrick_scale: false,
  category: "people"
};
const heart_eyes_cat = {
  keywords: [
    "animal",
    "love",
    "like",
    "affection",
    "cats",
    "valentines",
    "heart"
  ],
  char: "😻",
  fitzpatrick_scale: false,
  category: "people"
};
const smirk_cat = {
  keywords: [
    "animal",
    "cats",
    "smirk"
  ],
  char: "😼",
  fitzpatrick_scale: false,
  category: "people"
};
const kissing_cat = {
  keywords: [
    "animal",
    "cats",
    "kiss"
  ],
  char: "😽",
  fitzpatrick_scale: false,
  category: "people"
};
const scream_cat = {
  keywords: [
    "animal",
    "cats",
    "munch",
    "scared",
    "scream"
  ],
  char: "🙀",
  fitzpatrick_scale: false,
  category: "people"
};
const crying_cat_face = {
  keywords: [
    "animal",
    "tears",
    "weep",
    "sad",
    "cats",
    "upset",
    "cry"
  ],
  char: "😿",
  fitzpatrick_scale: false,
  category: "people"
};
const pouting_cat = {
  keywords: [
    "animal",
    "cats"
  ],
  char: "😾",
  fitzpatrick_scale: false,
  category: "people"
};
const palms_up = {
  keywords: [
    "hands",
    "gesture",
    "cupped",
    "prayer"
  ],
  char: "🤲",
  fitzpatrick_scale: true,
  category: "people"
};
const raised_hands = {
  keywords: [
    "gesture",
    "hooray",
    "yea",
    "celebration",
    "hands"
  ],
  char: "🙌",
  fitzpatrick_scale: true,
  category: "people"
};
const clap = {
  keywords: [
    "hands",
    "praise",
    "applause",
    "congrats",
    "yay"
  ],
  char: "👏",
  fitzpatrick_scale: true,
  category: "people"
};
const wave = {
  keywords: [
    "hands",
    "gesture",
    "goodbye",
    "solong",
    "farewell",
    "hello",
    "hi",
    "palm"
  ],
  char: "👋",
  fitzpatrick_scale: true,
  category: "people"
};
const call_me_hand = {
  keywords: [
    "hands",
    "gesture"
  ],
  char: "🤙",
  fitzpatrick_scale: true,
  category: "people"
};
const facepunch = {
  keywords: [
    "angry",
    "violence",
    "fist",
    "hit",
    "attack",
    "hand"
  ],
  char: "👊",
  fitzpatrick_scale: true,
  category: "people"
};
const fist = {
  keywords: [
    "fingers",
    "hand",
    "grasp"
  ],
  char: "✊",
  fitzpatrick_scale: true,
  category: "people"
};
const fist_left = {
  keywords: [
    "hand",
    "fistbump"
  ],
  char: "🤛",
  fitzpatrick_scale: true,
  category: "people"
};
const fist_right = {
  keywords: [
    "hand",
    "fistbump"
  ],
  char: "🤜",
  fitzpatrick_scale: true,
  category: "people"
};
const v = {
  keywords: [
    "fingers",
    "ohyeah",
    "hand",
    "peace",
    "victory",
    "two"
  ],
  char: "✌",
  fitzpatrick_scale: true,
  category: "people"
};
const ok_hand = {
  keywords: [
    "fingers",
    "limbs",
    "perfect",
    "ok",
    "okay"
  ],
  char: "👌",
  fitzpatrick_scale: true,
  category: "people"
};
const raised_hand = {
  keywords: [
    "fingers",
    "stop",
    "highfive",
    "palm",
    "ban"
  ],
  char: "✋",
  fitzpatrick_scale: true,
  category: "people"
};
const raised_back_of_hand = {
  keywords: [
    "fingers",
    "raised",
    "backhand"
  ],
  char: "🤚",
  fitzpatrick_scale: true,
  category: "people"
};
const open_hands = {
  keywords: [
    "fingers",
    "butterfly",
    "hands",
    "open"
  ],
  char: "👐",
  fitzpatrick_scale: true,
  category: "people"
};
const muscle = {
  keywords: [
    "arm",
    "flex",
    "hand",
    "summer",
    "strong",
    "biceps"
  ],
  char: "💪",
  fitzpatrick_scale: true,
  category: "people"
};
const pray = {
  keywords: [
    "please",
    "hope",
    "wish",
    "namaste",
    "highfive"
  ],
  char: "🙏",
  fitzpatrick_scale: true,
  category: "people"
};
const foot = {
  keywords: [
    "kick",
    "stomp"
  ],
  char: "🦶",
  fitzpatrick_scale: true,
  category: "people"
};
const leg = {
  keywords: [
    "kick",
    "limb"
  ],
  char: "🦵",
  fitzpatrick_scale: true,
  category: "people"
};
const handshake = {
  keywords: [
    "agreement",
    "shake"
  ],
  char: "🤝",
  fitzpatrick_scale: false,
  category: "people"
};
const point_up = {
  keywords: [
    "hand",
    "fingers",
    "direction",
    "up"
  ],
  char: "☝",
  fitzpatrick_scale: true,
  category: "people"
};
const point_up_2 = {
  keywords: [
    "fingers",
    "hand",
    "direction",
    "up"
  ],
  char: "👆",
  fitzpatrick_scale: true,
  category: "people"
};
const point_down = {
  keywords: [
    "fingers",
    "hand",
    "direction",
    "down"
  ],
  char: "👇",
  fitzpatrick_scale: true,
  category: "people"
};
const point_left = {
  keywords: [
    "direction",
    "fingers",
    "hand",
    "left"
  ],
  char: "👈",
  fitzpatrick_scale: true,
  category: "people"
};
const point_right = {
  keywords: [
    "fingers",
    "hand",
    "direction",
    "right"
  ],
  char: "👉",
  fitzpatrick_scale: true,
  category: "people"
};
const fu = {
  keywords: [
    "hand",
    "fingers",
    "rude",
    "middle",
    "flipping"
  ],
  char: "🖕",
  fitzpatrick_scale: true,
  category: "people"
};
const raised_hand_with_fingers_splayed = {
  keywords: [
    "hand",
    "fingers",
    "palm"
  ],
  char: "🖐",
  fitzpatrick_scale: true,
  category: "people"
};
const love_you = {
  keywords: [
    "hand",
    "fingers",
    "gesture"
  ],
  char: "🤟",
  fitzpatrick_scale: true,
  category: "people"
};
const metal = {
  keywords: [
    "hand",
    "fingers",
    "evil_eye",
    "sign_of_horns",
    "rock_on"
  ],
  char: "🤘",
  fitzpatrick_scale: true,
  category: "people"
};
const crossed_fingers = {
  keywords: [
    "good",
    "lucky"
  ],
  char: "🤞",
  fitzpatrick_scale: true,
  category: "people"
};
const vulcan_salute = {
  keywords: [
    "hand",
    "fingers",
    "spock",
    "star trek"
  ],
  char: "🖖",
  fitzpatrick_scale: true,
  category: "people"
};
const writing_hand = {
  keywords: [
    "lower_left_ballpoint_pen",
    "stationery",
    "write",
    "compose"
  ],
  char: "✍",
  fitzpatrick_scale: true,
  category: "people"
};
const selfie = {
  keywords: [
    "camera",
    "phone"
  ],
  char: "🤳",
  fitzpatrick_scale: true,
  category: "people"
};
const nail_care = {
  keywords: [
    "beauty",
    "manicure",
    "finger",
    "fashion",
    "nail"
  ],
  char: "💅",
  fitzpatrick_scale: true,
  category: "people"
};
const lips = {
  keywords: [
    "mouth",
    "kiss"
  ],
  char: "👄",
  fitzpatrick_scale: false,
  category: "people"
};
const tooth = {
  keywords: [
    "teeth",
    "dentist"
  ],
  char: "🦷",
  fitzpatrick_scale: false,
  category: "people"
};
const tongue = {
  keywords: [
    "mouth",
    "playful"
  ],
  char: "👅",
  fitzpatrick_scale: false,
  category: "people"
};
const ear = {
  keywords: [
    "face",
    "hear",
    "sound",
    "listen"
  ],
  char: "👂",
  fitzpatrick_scale: true,
  category: "people"
};
const nose = {
  keywords: [
    "smell",
    "sniff"
  ],
  char: "👃",
  fitzpatrick_scale: true,
  category: "people"
};
const eye = {
  keywords: [
    "face",
    "look",
    "see",
    "watch",
    "stare"
  ],
  char: "👁",
  fitzpatrick_scale: false,
  category: "people"
};
const eyes = {
  keywords: [
    "look",
    "watch",
    "stalk",
    "peek",
    "see"
  ],
  char: "👀",
  fitzpatrick_scale: false,
  category: "people"
};
const brain = {
  keywords: [
    "smart",
    "intelligent"
  ],
  char: "🧠",
  fitzpatrick_scale: false,
  category: "people"
};
const bust_in_silhouette = {
  keywords: [
    "user",
    "person",
    "human"
  ],
  char: "👤",
  fitzpatrick_scale: false,
  category: "people"
};
const busts_in_silhouette = {
  keywords: [
    "user",
    "person",
    "human",
    "group",
    "team"
  ],
  char: "👥",
  fitzpatrick_scale: false,
  category: "people"
};
const speaking_head = {
  keywords: [
    "user",
    "person",
    "human",
    "sing",
    "say",
    "talk"
  ],
  char: "🗣",
  fitzpatrick_scale: false,
  category: "people"
};
const baby = {
  keywords: [
    "child",
    "boy",
    "girl",
    "toddler"
  ],
  char: "👶",
  fitzpatrick_scale: true,
  category: "people"
};
const child = {
  keywords: [
    "gender-neutral",
    "young"
  ],
  char: "🧒",
  fitzpatrick_scale: true,
  category: "people"
};
const boy = {
  keywords: [
    "man",
    "male",
    "guy",
    "teenager"
  ],
  char: "👦",
  fitzpatrick_scale: true,
  category: "people"
};
const girl = {
  keywords: [
    "female",
    "woman",
    "teenager"
  ],
  char: "👧",
  fitzpatrick_scale: true,
  category: "people"
};
const adult = {
  keywords: [
    "gender-neutral",
    "person"
  ],
  char: "🧑",
  fitzpatrick_scale: true,
  category: "people"
};
const man = {
  keywords: [
    "mustache",
    "father",
    "dad",
    "guy",
    "classy",
    "sir",
    "moustache"
  ],
  char: "👨",
  fitzpatrick_scale: true,
  category: "people"
};
const woman = {
  keywords: [
    "female",
    "girls",
    "lady"
  ],
  char: "👩",
  fitzpatrick_scale: true,
  category: "people"
};
const blonde_woman = {
  keywords: [
    "woman",
    "female",
    "girl",
    "blonde",
    "person"
  ],
  char: "👱‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const blonde_man = {
  keywords: [
    "man",
    "male",
    "boy",
    "blonde",
    "guy",
    "person"
  ],
  char: "👱",
  fitzpatrick_scale: true,
  category: "people"
};
const bearded_person = {
  keywords: [
    "person",
    "bewhiskered"
  ],
  char: "🧔",
  fitzpatrick_scale: true,
  category: "people"
};
const older_adult = {
  keywords: [
    "human",
    "elder",
    "senior",
    "gender-neutral"
  ],
  char: "🧓",
  fitzpatrick_scale: true,
  category: "people"
};
const older_man = {
  keywords: [
    "human",
    "male",
    "men",
    "old",
    "elder",
    "senior"
  ],
  char: "👴",
  fitzpatrick_scale: true,
  category: "people"
};
const older_woman = {
  keywords: [
    "human",
    "female",
    "women",
    "lady",
    "old",
    "elder",
    "senior"
  ],
  char: "👵",
  fitzpatrick_scale: true,
  category: "people"
};
const man_with_gua_pi_mao = {
  keywords: [
    "male",
    "boy",
    "chinese"
  ],
  char: "👲",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_with_headscarf = {
  keywords: [
    "female",
    "hijab",
    "mantilla",
    "tichel"
  ],
  char: "🧕",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_with_turban = {
  keywords: [
    "female",
    "indian",
    "hinduism",
    "arabs",
    "woman"
  ],
  char: "👳‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_with_turban = {
  keywords: [
    "male",
    "indian",
    "hinduism",
    "arabs"
  ],
  char: "👳",
  fitzpatrick_scale: true,
  category: "people"
};
const policewoman = {
  keywords: [
    "woman",
    "police",
    "law",
    "legal",
    "enforcement",
    "arrest",
    "911",
    "female"
  ],
  char: "👮‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const policeman = {
  keywords: [
    "man",
    "police",
    "law",
    "legal",
    "enforcement",
    "arrest",
    "911"
  ],
  char: "👮",
  fitzpatrick_scale: true,
  category: "people"
};
const construction_worker_woman = {
  keywords: [
    "female",
    "human",
    "wip",
    "build",
    "construction",
    "worker",
    "labor",
    "woman"
  ],
  char: "👷‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const construction_worker_man = {
  keywords: [
    "male",
    "human",
    "wip",
    "guy",
    "build",
    "construction",
    "worker",
    "labor"
  ],
  char: "👷",
  fitzpatrick_scale: true,
  category: "people"
};
const guardswoman = {
  keywords: [
    "uk",
    "gb",
    "british",
    "female",
    "royal",
    "woman"
  ],
  char: "💂‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const guardsman = {
  keywords: [
    "uk",
    "gb",
    "british",
    "male",
    "guy",
    "royal"
  ],
  char: "💂",
  fitzpatrick_scale: true,
  category: "people"
};
const female_detective = {
  keywords: [
    "human",
    "spy",
    "detective",
    "female",
    "woman"
  ],
  char: "🕵️‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const male_detective = {
  keywords: [
    "human",
    "spy",
    "detective"
  ],
  char: "🕵",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_health_worker = {
  keywords: [
    "doctor",
    "nurse",
    "therapist",
    "healthcare",
    "woman",
    "human"
  ],
  char: "👩‍⚕️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_health_worker = {
  keywords: [
    "doctor",
    "nurse",
    "therapist",
    "healthcare",
    "man",
    "human"
  ],
  char: "👨‍⚕️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_farmer = {
  keywords: [
    "rancher",
    "gardener",
    "woman",
    "human"
  ],
  char: "👩‍🌾",
  fitzpatrick_scale: true,
  category: "people"
};
const man_farmer = {
  keywords: [
    "rancher",
    "gardener",
    "man",
    "human"
  ],
  char: "👨‍🌾",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_cook = {
  keywords: [
    "chef",
    "woman",
    "human"
  ],
  char: "👩‍🍳",
  fitzpatrick_scale: true,
  category: "people"
};
const man_cook = {
  keywords: [
    "chef",
    "man",
    "human"
  ],
  char: "👨‍🍳",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_student = {
  keywords: [
    "graduate",
    "woman",
    "human"
  ],
  char: "👩‍🎓",
  fitzpatrick_scale: true,
  category: "people"
};
const man_student = {
  keywords: [
    "graduate",
    "man",
    "human"
  ],
  char: "👨‍🎓",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_singer = {
  keywords: [
    "rockstar",
    "entertainer",
    "woman",
    "human"
  ],
  char: "👩‍🎤",
  fitzpatrick_scale: true,
  category: "people"
};
const man_singer = {
  keywords: [
    "rockstar",
    "entertainer",
    "man",
    "human"
  ],
  char: "👨‍🎤",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_teacher = {
  keywords: [
    "instructor",
    "professor",
    "woman",
    "human"
  ],
  char: "👩‍🏫",
  fitzpatrick_scale: true,
  category: "people"
};
const man_teacher = {
  keywords: [
    "instructor",
    "professor",
    "man",
    "human"
  ],
  char: "👨‍🏫",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_factory_worker = {
  keywords: [
    "assembly",
    "industrial",
    "woman",
    "human"
  ],
  char: "👩‍🏭",
  fitzpatrick_scale: true,
  category: "people"
};
const man_factory_worker = {
  keywords: [
    "assembly",
    "industrial",
    "man",
    "human"
  ],
  char: "👨‍🏭",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_technologist = {
  keywords: [
    "coder",
    "developer",
    "engineer",
    "programmer",
    "software",
    "woman",
    "human",
    "laptop",
    "computer"
  ],
  char: "👩‍💻",
  fitzpatrick_scale: true,
  category: "people"
};
const man_technologist = {
  keywords: [
    "coder",
    "developer",
    "engineer",
    "programmer",
    "software",
    "man",
    "human",
    "laptop",
    "computer"
  ],
  char: "👨‍💻",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_office_worker = {
  keywords: [
    "business",
    "manager",
    "woman",
    "human"
  ],
  char: "👩‍💼",
  fitzpatrick_scale: true,
  category: "people"
};
const man_office_worker = {
  keywords: [
    "business",
    "manager",
    "man",
    "human"
  ],
  char: "👨‍💼",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_mechanic = {
  keywords: [
    "plumber",
    "woman",
    "human",
    "wrench"
  ],
  char: "👩‍🔧",
  fitzpatrick_scale: true,
  category: "people"
};
const man_mechanic = {
  keywords: [
    "plumber",
    "man",
    "human",
    "wrench"
  ],
  char: "👨‍🔧",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_scientist = {
  keywords: [
    "biologist",
    "chemist",
    "engineer",
    "physicist",
    "woman",
    "human"
  ],
  char: "👩‍🔬",
  fitzpatrick_scale: true,
  category: "people"
};
const man_scientist = {
  keywords: [
    "biologist",
    "chemist",
    "engineer",
    "physicist",
    "man",
    "human"
  ],
  char: "👨‍🔬",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_artist = {
  keywords: [
    "painter",
    "woman",
    "human"
  ],
  char: "👩‍🎨",
  fitzpatrick_scale: true,
  category: "people"
};
const man_artist = {
  keywords: [
    "painter",
    "man",
    "human"
  ],
  char: "👨‍🎨",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_firefighter = {
  keywords: [
    "fireman",
    "woman",
    "human"
  ],
  char: "👩‍🚒",
  fitzpatrick_scale: true,
  category: "people"
};
const man_firefighter = {
  keywords: [
    "fireman",
    "man",
    "human"
  ],
  char: "👨‍🚒",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_pilot = {
  keywords: [
    "aviator",
    "plane",
    "woman",
    "human"
  ],
  char: "👩‍✈️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_pilot = {
  keywords: [
    "aviator",
    "plane",
    "man",
    "human"
  ],
  char: "👨‍✈️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_astronaut = {
  keywords: [
    "space",
    "rocket",
    "woman",
    "human"
  ],
  char: "👩‍🚀",
  fitzpatrick_scale: true,
  category: "people"
};
const man_astronaut = {
  keywords: [
    "space",
    "rocket",
    "man",
    "human"
  ],
  char: "👨‍🚀",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_judge = {
  keywords: [
    "justice",
    "court",
    "woman",
    "human"
  ],
  char: "👩‍⚖️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_judge = {
  keywords: [
    "justice",
    "court",
    "man",
    "human"
  ],
  char: "👨‍⚖️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_superhero = {
  keywords: [
    "woman",
    "female",
    "good",
    "heroine",
    "superpowers"
  ],
  char: "🦸‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_superhero = {
  keywords: [
    "man",
    "male",
    "good",
    "hero",
    "superpowers"
  ],
  char: "🦸‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_supervillain = {
  keywords: [
    "woman",
    "female",
    "evil",
    "bad",
    "criminal",
    "heroine",
    "superpowers"
  ],
  char: "🦹‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_supervillain = {
  keywords: [
    "man",
    "male",
    "evil",
    "bad",
    "criminal",
    "hero",
    "superpowers"
  ],
  char: "🦹‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const mrs_claus = {
  keywords: [
    "woman",
    "female",
    "xmas",
    "mother christmas"
  ],
  char: "🤶",
  fitzpatrick_scale: true,
  category: "people"
};
const santa = {
  keywords: [
    "festival",
    "man",
    "male",
    "xmas",
    "father christmas"
  ],
  char: "🎅",
  fitzpatrick_scale: true,
  category: "people"
};
const sorceress = {
  keywords: [
    "woman",
    "female",
    "mage",
    "witch"
  ],
  char: "🧙‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const wizard = {
  keywords: [
    "man",
    "male",
    "mage",
    "sorcerer"
  ],
  char: "🧙‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_elf = {
  keywords: [
    "woman",
    "female"
  ],
  char: "🧝‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_elf = {
  keywords: [
    "man",
    "male"
  ],
  char: "🧝‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_vampire = {
  keywords: [
    "woman",
    "female"
  ],
  char: "🧛‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_vampire = {
  keywords: [
    "man",
    "male",
    "dracula"
  ],
  char: "🧛‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_zombie = {
  keywords: [
    "woman",
    "female",
    "undead",
    "walking dead"
  ],
  char: "🧟‍♀️",
  fitzpatrick_scale: false,
  category: "people"
};
const man_zombie = {
  keywords: [
    "man",
    "male",
    "dracula",
    "undead",
    "walking dead"
  ],
  char: "🧟‍♂️",
  fitzpatrick_scale: false,
  category: "people"
};
const woman_genie = {
  keywords: [
    "woman",
    "female"
  ],
  char: "🧞‍♀️",
  fitzpatrick_scale: false,
  category: "people"
};
const man_genie = {
  keywords: [
    "man",
    "male"
  ],
  char: "🧞‍♂️",
  fitzpatrick_scale: false,
  category: "people"
};
const mermaid = {
  keywords: [
    "woman",
    "female",
    "merwoman",
    "ariel"
  ],
  char: "🧜‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const merman = {
  keywords: [
    "man",
    "male",
    "triton"
  ],
  char: "🧜‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_fairy = {
  keywords: [
    "woman",
    "female"
  ],
  char: "🧚‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_fairy = {
  keywords: [
    "man",
    "male"
  ],
  char: "🧚‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const angel = {
  keywords: [
    "heaven",
    "wings",
    "halo"
  ],
  char: "👼",
  fitzpatrick_scale: true,
  category: "people"
};
const pregnant_woman = {
  keywords: [
    "baby"
  ],
  char: "🤰",
  fitzpatrick_scale: true,
  category: "people"
};
const breastfeeding = {
  keywords: [
    "nursing",
    "baby"
  ],
  char: "🤱",
  fitzpatrick_scale: true,
  category: "people"
};
const princess = {
  keywords: [
    "girl",
    "woman",
    "female",
    "blond",
    "crown",
    "royal",
    "queen"
  ],
  char: "👸",
  fitzpatrick_scale: true,
  category: "people"
};
const prince = {
  keywords: [
    "boy",
    "man",
    "male",
    "crown",
    "royal",
    "king"
  ],
  char: "🤴",
  fitzpatrick_scale: true,
  category: "people"
};
const bride_with_veil = {
  keywords: [
    "couple",
    "marriage",
    "wedding",
    "woman",
    "bride"
  ],
  char: "👰",
  fitzpatrick_scale: true,
  category: "people"
};
const man_in_tuxedo = {
  keywords: [
    "couple",
    "marriage",
    "wedding",
    "groom"
  ],
  char: "🤵",
  fitzpatrick_scale: true,
  category: "people"
};
const running_woman = {
  keywords: [
    "woman",
    "walking",
    "exercise",
    "race",
    "running",
    "female"
  ],
  char: "🏃‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const running_man = {
  keywords: [
    "man",
    "walking",
    "exercise",
    "race",
    "running"
  ],
  char: "🏃",
  fitzpatrick_scale: true,
  category: "people"
};
const walking_woman = {
  keywords: [
    "human",
    "feet",
    "steps",
    "woman",
    "female"
  ],
  char: "🚶‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const walking_man = {
  keywords: [
    "human",
    "feet",
    "steps"
  ],
  char: "🚶",
  fitzpatrick_scale: true,
  category: "people"
};
const dancer = {
  keywords: [
    "female",
    "girl",
    "woman",
    "fun"
  ],
  char: "💃",
  fitzpatrick_scale: true,
  category: "people"
};
const man_dancing = {
  keywords: [
    "male",
    "boy",
    "fun",
    "dancer"
  ],
  char: "🕺",
  fitzpatrick_scale: true,
  category: "people"
};
const dancing_women = {
  keywords: [
    "female",
    "bunny",
    "women",
    "girls"
  ],
  char: "👯",
  fitzpatrick_scale: false,
  category: "people"
};
const dancing_men = {
  keywords: [
    "male",
    "bunny",
    "men",
    "boys"
  ],
  char: "👯‍♂️",
  fitzpatrick_scale: false,
  category: "people"
};
const couple = {
  keywords: [
    "pair",
    "people",
    "human",
    "love",
    "date",
    "dating",
    "like",
    "affection",
    "valentines",
    "marriage"
  ],
  char: "👫",
  fitzpatrick_scale: false,
  category: "people"
};
const two_men_holding_hands = {
  keywords: [
    "pair",
    "couple",
    "love",
    "like",
    "bromance",
    "friendship",
    "people",
    "human"
  ],
  char: "👬",
  fitzpatrick_scale: false,
  category: "people"
};
const two_women_holding_hands = {
  keywords: [
    "pair",
    "friendship",
    "couple",
    "love",
    "like",
    "female",
    "people",
    "human"
  ],
  char: "👭",
  fitzpatrick_scale: false,
  category: "people"
};
const bowing_woman = {
  keywords: [
    "woman",
    "female",
    "girl"
  ],
  char: "🙇‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const bowing_man = {
  keywords: [
    "man",
    "male",
    "boy"
  ],
  char: "🙇",
  fitzpatrick_scale: true,
  category: "people"
};
const man_facepalming = {
  keywords: [
    "man",
    "male",
    "boy",
    "disbelief"
  ],
  char: "🤦‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_facepalming = {
  keywords: [
    "woman",
    "female",
    "girl",
    "disbelief"
  ],
  char: "🤦‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_shrugging = {
  keywords: [
    "woman",
    "female",
    "girl",
    "confused",
    "indifferent",
    "doubt"
  ],
  char: "🤷",
  fitzpatrick_scale: true,
  category: "people"
};
const man_shrugging = {
  keywords: [
    "man",
    "male",
    "boy",
    "confused",
    "indifferent",
    "doubt"
  ],
  char: "🤷‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const tipping_hand_woman = {
  keywords: [
    "female",
    "girl",
    "woman",
    "human",
    "information"
  ],
  char: "💁",
  fitzpatrick_scale: true,
  category: "people"
};
const tipping_hand_man = {
  keywords: [
    "male",
    "boy",
    "man",
    "human",
    "information"
  ],
  char: "💁‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const no_good_woman = {
  keywords: [
    "female",
    "girl",
    "woman",
    "nope"
  ],
  char: "🙅",
  fitzpatrick_scale: true,
  category: "people"
};
const no_good_man = {
  keywords: [
    "male",
    "boy",
    "man",
    "nope"
  ],
  char: "🙅‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const ok_woman = {
  keywords: [
    "women",
    "girl",
    "female",
    "pink",
    "human",
    "woman"
  ],
  char: "🙆",
  fitzpatrick_scale: true,
  category: "people"
};
const ok_man = {
  keywords: [
    "men",
    "boy",
    "male",
    "blue",
    "human",
    "man"
  ],
  char: "🙆‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const raising_hand_woman = {
  keywords: [
    "female",
    "girl",
    "woman"
  ],
  char: "🙋",
  fitzpatrick_scale: true,
  category: "people"
};
const raising_hand_man = {
  keywords: [
    "male",
    "boy",
    "man"
  ],
  char: "🙋‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const pouting_woman = {
  keywords: [
    "female",
    "girl",
    "woman"
  ],
  char: "🙎",
  fitzpatrick_scale: true,
  category: "people"
};
const pouting_man = {
  keywords: [
    "male",
    "boy",
    "man"
  ],
  char: "🙎‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const frowning_woman = {
  keywords: [
    "female",
    "girl",
    "woman",
    "sad",
    "depressed",
    "discouraged",
    "unhappy"
  ],
  char: "🙍",
  fitzpatrick_scale: true,
  category: "people"
};
const frowning_man = {
  keywords: [
    "male",
    "boy",
    "man",
    "sad",
    "depressed",
    "discouraged",
    "unhappy"
  ],
  char: "🙍‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const haircut_woman = {
  keywords: [
    "female",
    "girl",
    "woman"
  ],
  char: "💇",
  fitzpatrick_scale: true,
  category: "people"
};
const haircut_man = {
  keywords: [
    "male",
    "boy",
    "man"
  ],
  char: "💇‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const massage_woman = {
  keywords: [
    "female",
    "girl",
    "woman",
    "head"
  ],
  char: "💆",
  fitzpatrick_scale: true,
  category: "people"
};
const massage_man = {
  keywords: [
    "male",
    "boy",
    "man",
    "head"
  ],
  char: "💆‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const woman_in_steamy_room = {
  keywords: [
    "female",
    "woman",
    "spa",
    "steamroom",
    "sauna"
  ],
  char: "🧖‍♀️",
  fitzpatrick_scale: true,
  category: "people"
};
const man_in_steamy_room = {
  keywords: [
    "male",
    "man",
    "spa",
    "steamroom",
    "sauna"
  ],
  char: "🧖‍♂️",
  fitzpatrick_scale: true,
  category: "people"
};
const couple_with_heart_woman_man = {
  keywords: [
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  char: "💑",
  fitzpatrick_scale: false,
  category: "people"
};
const couple_with_heart_woman_woman = {
  keywords: [
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  char: "👩‍❤️‍👩",
  fitzpatrick_scale: false,
  category: "people"
};
const couple_with_heart_man_man = {
  keywords: [
    "pair",
    "love",
    "like",
    "affection",
    "human",
    "dating",
    "valentines",
    "marriage"
  ],
  char: "👨‍❤️‍👨",
  fitzpatrick_scale: false,
  category: "people"
};
const couplekiss_man_woman = {
  keywords: [
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  char: "💏",
  fitzpatrick_scale: false,
  category: "people"
};
const couplekiss_woman_woman = {
  keywords: [
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  char: "👩‍❤️‍💋‍👩",
  fitzpatrick_scale: false,
  category: "people"
};
const couplekiss_man_man = {
  keywords: [
    "pair",
    "valentines",
    "love",
    "like",
    "dating",
    "marriage"
  ],
  char: "👨‍❤️‍💋‍👨",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_woman_boy = {
  keywords: [
    "home",
    "parents",
    "child",
    "mom",
    "dad",
    "father",
    "mother",
    "people",
    "human"
  ],
  char: "👪",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_woman_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "child"
  ],
  char: "👨‍👩‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_woman_girl_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👩‍👧‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_woman_boy_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👩‍👦‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_woman_girl_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👩‍👧‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_woman_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👩‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_woman_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👩‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_woman_girl_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👩‍👧‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_woman_boy_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👩‍👦‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_woman_girl_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👩‍👧‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_man_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👨‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_man_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👨‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_man_girl_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👨‍👧‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_man_boy_boy = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👨‍👦‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_man_girl_girl = {
  keywords: [
    "home",
    "parents",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👨‍👧‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  char: "👩‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_girl = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  char: "👩‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_girl_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👧‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_boy_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👦‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_woman_girl_girl = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👩‍👧‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  char: "👨‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_girl = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "child"
  ],
  char: "👨‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_girl_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👧‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_boy_boy = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👦‍👦",
  fitzpatrick_scale: false,
  category: "people"
};
const family_man_girl_girl = {
  keywords: [
    "home",
    "parent",
    "people",
    "human",
    "children"
  ],
  char: "👨‍👧‍👧",
  fitzpatrick_scale: false,
  category: "people"
};
const yarn = {
  keywords: [
    "ball",
    "crochet",
    "knit"
  ],
  char: "🧶",
  fitzpatrick_scale: false,
  category: "people"
};
const thread = {
  keywords: [
    "needle",
    "sewing",
    "spool",
    "string"
  ],
  char: "🧵",
  fitzpatrick_scale: false,
  category: "people"
};
const coat = {
  keywords: [
    "jacket"
  ],
  char: "🧥",
  fitzpatrick_scale: false,
  category: "people"
};
const labcoat = {
  keywords: [
    "doctor",
    "experiment",
    "scientist",
    "chemist"
  ],
  char: "🥼",
  fitzpatrick_scale: false,
  category: "people"
};
const womans_clothes = {
  keywords: [
    "fashion",
    "shopping_bags",
    "female"
  ],
  char: "👚",
  fitzpatrick_scale: false,
  category: "people"
};
const tshirt = {
  keywords: [
    "fashion",
    "cloth",
    "casual",
    "shirt",
    "tee"
  ],
  char: "👕",
  fitzpatrick_scale: false,
  category: "people"
};
const jeans = {
  keywords: [
    "fashion",
    "shopping"
  ],
  char: "👖",
  fitzpatrick_scale: false,
  category: "people"
};
const necktie = {
  keywords: [
    "shirt",
    "suitup",
    "formal",
    "fashion",
    "cloth",
    "business"
  ],
  char: "👔",
  fitzpatrick_scale: false,
  category: "people"
};
const dress = {
  keywords: [
    "clothes",
    "fashion",
    "shopping"
  ],
  char: "👗",
  fitzpatrick_scale: false,
  category: "people"
};
const bikini = {
  keywords: [
    "swimming",
    "female",
    "woman",
    "girl",
    "fashion",
    "beach",
    "summer"
  ],
  char: "👙",
  fitzpatrick_scale: false,
  category: "people"
};
const kimono = {
  keywords: [
    "dress",
    "fashion",
    "women",
    "female",
    "japanese"
  ],
  char: "👘",
  fitzpatrick_scale: false,
  category: "people"
};
const lipstick = {
  keywords: [
    "female",
    "girl",
    "fashion",
    "woman"
  ],
  char: "💄",
  fitzpatrick_scale: false,
  category: "people"
};
const kiss = {
  keywords: [
    "face",
    "lips",
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💋",
  fitzpatrick_scale: false,
  category: "people"
};
const footprints = {
  keywords: [
    "feet",
    "tracking",
    "walking",
    "beach"
  ],
  char: "👣",
  fitzpatrick_scale: false,
  category: "people"
};
const flat_shoe = {
  keywords: [
    "ballet",
    "slip-on",
    "slipper"
  ],
  char: "🥿",
  fitzpatrick_scale: false,
  category: "people"
};
const high_heel = {
  keywords: [
    "fashion",
    "shoes",
    "female",
    "pumps",
    "stiletto"
  ],
  char: "👠",
  fitzpatrick_scale: false,
  category: "people"
};
const sandal = {
  keywords: [
    "shoes",
    "fashion",
    "flip flops"
  ],
  char: "👡",
  fitzpatrick_scale: false,
  category: "people"
};
const boot = {
  keywords: [
    "shoes",
    "fashion"
  ],
  char: "👢",
  fitzpatrick_scale: false,
  category: "people"
};
const mans_shoe = {
  keywords: [
    "fashion",
    "male"
  ],
  char: "👞",
  fitzpatrick_scale: false,
  category: "people"
};
const athletic_shoe = {
  keywords: [
    "shoes",
    "sports",
    "sneakers"
  ],
  char: "👟",
  fitzpatrick_scale: false,
  category: "people"
};
const hiking_boot = {
  keywords: [
    "backpacking",
    "camping",
    "hiking"
  ],
  char: "🥾",
  fitzpatrick_scale: false,
  category: "people"
};
const socks = {
  keywords: [
    "stockings",
    "clothes"
  ],
  char: "🧦",
  fitzpatrick_scale: false,
  category: "people"
};
const gloves = {
  keywords: [
    "hands",
    "winter",
    "clothes"
  ],
  char: "🧤",
  fitzpatrick_scale: false,
  category: "people"
};
const scarf = {
  keywords: [
    "neck",
    "winter",
    "clothes"
  ],
  char: "🧣",
  fitzpatrick_scale: false,
  category: "people"
};
const womans_hat = {
  keywords: [
    "fashion",
    "accessories",
    "female",
    "lady",
    "spring"
  ],
  char: "👒",
  fitzpatrick_scale: false,
  category: "people"
};
const tophat = {
  keywords: [
    "magic",
    "gentleman",
    "classy",
    "circus"
  ],
  char: "🎩",
  fitzpatrick_scale: false,
  category: "people"
};
const billed_hat = {
  keywords: [
    "cap",
    "baseball"
  ],
  char: "🧢",
  fitzpatrick_scale: false,
  category: "people"
};
const rescue_worker_helmet = {
  keywords: [
    "construction",
    "build"
  ],
  char: "⛑",
  fitzpatrick_scale: false,
  category: "people"
};
const mortar_board = {
  keywords: [
    "school",
    "college",
    "degree",
    "university",
    "graduation",
    "cap",
    "hat",
    "legal",
    "learn",
    "education"
  ],
  char: "🎓",
  fitzpatrick_scale: false,
  category: "people"
};
const crown = {
  keywords: [
    "king",
    "kod",
    "leader",
    "royalty",
    "lord"
  ],
  char: "👑",
  fitzpatrick_scale: false,
  category: "people"
};
const school_satchel = {
  keywords: [
    "student",
    "education",
    "bag",
    "backpack"
  ],
  char: "🎒",
  fitzpatrick_scale: false,
  category: "people"
};
const luggage = {
  keywords: [
    "packing",
    "travel"
  ],
  char: "🧳",
  fitzpatrick_scale: false,
  category: "people"
};
const pouch = {
  keywords: [
    "bag",
    "accessories",
    "shopping"
  ],
  char: "👝",
  fitzpatrick_scale: false,
  category: "people"
};
const purse = {
  keywords: [
    "fashion",
    "accessories",
    "money",
    "sales",
    "shopping"
  ],
  char: "👛",
  fitzpatrick_scale: false,
  category: "people"
};
const handbag = {
  keywords: [
    "fashion",
    "accessory",
    "accessories",
    "shopping"
  ],
  char: "👜",
  fitzpatrick_scale: false,
  category: "people"
};
const briefcase = {
  keywords: [
    "business",
    "documents",
    "work",
    "law",
    "legal",
    "job",
    "career"
  ],
  char: "💼",
  fitzpatrick_scale: false,
  category: "people"
};
const eyeglasses = {
  keywords: [
    "fashion",
    "accessories",
    "eyesight",
    "nerdy",
    "dork",
    "geek"
  ],
  char: "👓",
  fitzpatrick_scale: false,
  category: "people"
};
const dark_sunglasses = {
  keywords: [
    "face",
    "cool",
    "accessories"
  ],
  char: "🕶",
  fitzpatrick_scale: false,
  category: "people"
};
const goggles = {
  keywords: [
    "eyes",
    "protection",
    "safety"
  ],
  char: "🥽",
  fitzpatrick_scale: false,
  category: "people"
};
const ring = {
  keywords: [
    "wedding",
    "propose",
    "marriage",
    "valentines",
    "diamond",
    "fashion",
    "jewelry",
    "gem",
    "engagement"
  ],
  char: "💍",
  fitzpatrick_scale: false,
  category: "people"
};
const closed_umbrella = {
  keywords: [
    "weather",
    "rain",
    "drizzle"
  ],
  char: "🌂",
  fitzpatrick_scale: false,
  category: "people"
};
const dog = {
  keywords: [
    "animal",
    "friend",
    "nature",
    "woof",
    "puppy",
    "pet",
    "faithful"
  ],
  char: "🐶",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cat = {
  keywords: [
    "animal",
    "meow",
    "nature",
    "pet",
    "kitten"
  ],
  char: "🐱",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const mouse = {
  keywords: [
    "animal",
    "nature",
    "cheese_wedge",
    "rodent"
  ],
  char: "🐭",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hamster = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐹",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rabbit = {
  keywords: [
    "animal",
    "nature",
    "pet",
    "spring",
    "magic",
    "bunny"
  ],
  char: "🐰",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const fox_face = {
  keywords: [
    "animal",
    "nature",
    "face"
  ],
  char: "🦊",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bear = {
  keywords: [
    "animal",
    "nature",
    "wild"
  ],
  char: "🐻",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const panda_face = {
  keywords: [
    "animal",
    "nature",
    "panda"
  ],
  char: "🐼",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const koala = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐨",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tiger = {
  keywords: [
    "animal",
    "cat",
    "danger",
    "wild",
    "nature",
    "roar"
  ],
  char: "🐯",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const lion = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🦁",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cow = {
  keywords: [
    "beef",
    "ox",
    "animal",
    "nature",
    "moo",
    "milk"
  ],
  char: "🐮",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const pig = {
  keywords: [
    "animal",
    "oink",
    "nature"
  ],
  char: "🐷",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const pig_nose = {
  keywords: [
    "animal",
    "oink"
  ],
  char: "🐽",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const frog = {
  keywords: [
    "animal",
    "nature",
    "croak",
    "toad"
  ],
  char: "🐸",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const squid = {
  keywords: [
    "animal",
    "nature",
    "ocean",
    "sea"
  ],
  char: "🦑",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const octopus = {
  keywords: [
    "animal",
    "creature",
    "ocean",
    "sea",
    "nature",
    "beach"
  ],
  char: "🐙",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const shrimp = {
  keywords: [
    "animal",
    "ocean",
    "nature",
    "seafood"
  ],
  char: "🦐",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const monkey_face = {
  keywords: [
    "animal",
    "nature",
    "circus"
  ],
  char: "🐵",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const gorilla = {
  keywords: [
    "animal",
    "nature",
    "circus"
  ],
  char: "🦍",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const see_no_evil = {
  keywords: [
    "monkey",
    "animal",
    "nature",
    "haha"
  ],
  char: "🙈",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hear_no_evil = {
  keywords: [
    "animal",
    "monkey",
    "nature"
  ],
  char: "🙉",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const speak_no_evil = {
  keywords: [
    "monkey",
    "animal",
    "nature",
    "omg"
  ],
  char: "🙊",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const monkey = {
  keywords: [
    "animal",
    "nature",
    "banana",
    "circus"
  ],
  char: "🐒",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const chicken = {
  keywords: [
    "animal",
    "cluck",
    "nature",
    "bird"
  ],
  char: "🐔",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const penguin = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐧",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bird = {
  keywords: [
    "animal",
    "nature",
    "fly",
    "tweet",
    "spring"
  ],
  char: "🐦",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const baby_chick = {
  keywords: [
    "animal",
    "chicken",
    "bird"
  ],
  char: "🐤",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hatching_chick = {
  keywords: [
    "animal",
    "chicken",
    "egg",
    "born",
    "baby",
    "bird"
  ],
  char: "🐣",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hatched_chick = {
  keywords: [
    "animal",
    "chicken",
    "baby",
    "bird"
  ],
  char: "🐥",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const duck = {
  keywords: [
    "animal",
    "nature",
    "bird",
    "mallard"
  ],
  char: "🦆",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const eagle = {
  keywords: [
    "animal",
    "nature",
    "bird"
  ],
  char: "🦅",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const owl = {
  keywords: [
    "animal",
    "nature",
    "bird",
    "hoot"
  ],
  char: "🦉",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bat = {
  keywords: [
    "animal",
    "nature",
    "blind",
    "vampire"
  ],
  char: "🦇",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const wolf = {
  keywords: [
    "animal",
    "nature",
    "wild"
  ],
  char: "🐺",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const boar = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐗",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const horse = {
  keywords: [
    "animal",
    "brown",
    "nature"
  ],
  char: "🐴",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const unicorn = {
  keywords: [
    "animal",
    "nature",
    "mystical"
  ],
  char: "🦄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const honeybee = {
  keywords: [
    "animal",
    "insect",
    "nature",
    "bug",
    "spring",
    "honey"
  ],
  char: "🐝",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bug = {
  keywords: [
    "animal",
    "insect",
    "nature",
    "worm"
  ],
  char: "🐛",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const butterfly = {
  keywords: [
    "animal",
    "insect",
    "nature",
    "caterpillar"
  ],
  char: "🦋",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const snail = {
  keywords: [
    "slow",
    "animal",
    "shell"
  ],
  char: "🐌",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const beetle = {
  keywords: [
    "animal",
    "insect",
    "nature",
    "ladybug"
  ],
  char: "🐞",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const ant = {
  keywords: [
    "animal",
    "insect",
    "nature",
    "bug"
  ],
  char: "🐜",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const grasshopper = {
  keywords: [
    "animal",
    "cricket",
    "chirp"
  ],
  char: "🦗",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const spider = {
  keywords: [
    "animal",
    "arachnid"
  ],
  char: "🕷",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const scorpion = {
  keywords: [
    "animal",
    "arachnid"
  ],
  char: "🦂",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const crab = {
  keywords: [
    "animal",
    "crustacean"
  ],
  char: "🦀",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const snake = {
  keywords: [
    "animal",
    "evil",
    "nature",
    "hiss",
    "python"
  ],
  char: "🐍",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const lizard = {
  keywords: [
    "animal",
    "nature",
    "reptile"
  ],
  char: "🦎",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sauropod = {
  keywords: [
    "animal",
    "nature",
    "dinosaur",
    "brachiosaurus",
    "brontosaurus",
    "diplodocus",
    "extinct"
  ],
  char: "🦕",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const turtle = {
  keywords: [
    "animal",
    "slow",
    "nature",
    "tortoise"
  ],
  char: "🐢",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tropical_fish = {
  keywords: [
    "animal",
    "swim",
    "ocean",
    "beach",
    "nemo"
  ],
  char: "🐠",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const fish = {
  keywords: [
    "animal",
    "food",
    "nature"
  ],
  char: "🐟",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const blowfish = {
  keywords: [
    "animal",
    "nature",
    "food",
    "sea",
    "ocean"
  ],
  char: "🐡",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dolphin = {
  keywords: [
    "animal",
    "nature",
    "fish",
    "sea",
    "ocean",
    "flipper",
    "fins",
    "beach"
  ],
  char: "🐬",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const shark = {
  keywords: [
    "animal",
    "nature",
    "fish",
    "sea",
    "ocean",
    "jaws",
    "fins",
    "beach"
  ],
  char: "🦈",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const whale = {
  keywords: [
    "animal",
    "nature",
    "sea",
    "ocean"
  ],
  char: "🐳",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const whale2 = {
  keywords: [
    "animal",
    "nature",
    "sea",
    "ocean"
  ],
  char: "🐋",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const crocodile = {
  keywords: [
    "animal",
    "nature",
    "reptile",
    "lizard",
    "alligator"
  ],
  char: "🐊",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const leopard = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐆",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const zebra = {
  keywords: [
    "animal",
    "nature",
    "stripes",
    "safari"
  ],
  char: "🦓",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tiger2 = {
  keywords: [
    "animal",
    "nature",
    "roar"
  ],
  char: "🐅",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const water_buffalo = {
  keywords: [
    "animal",
    "nature",
    "ox",
    "cow"
  ],
  char: "🐃",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const ox = {
  keywords: [
    "animal",
    "cow",
    "beef"
  ],
  char: "🐂",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cow2 = {
  keywords: [
    "beef",
    "ox",
    "animal",
    "nature",
    "moo",
    "milk"
  ],
  char: "🐄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const deer = {
  keywords: [
    "animal",
    "nature",
    "horns",
    "venison"
  ],
  char: "🦌",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dromedary_camel = {
  keywords: [
    "animal",
    "hot",
    "desert",
    "hump"
  ],
  char: "🐪",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const camel = {
  keywords: [
    "animal",
    "nature",
    "hot",
    "desert",
    "hump"
  ],
  char: "🐫",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const giraffe = {
  keywords: [
    "animal",
    "nature",
    "spots",
    "safari"
  ],
  char: "🦒",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const elephant = {
  keywords: [
    "animal",
    "nature",
    "nose",
    "th",
    "circus"
  ],
  char: "🐘",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rhinoceros = {
  keywords: [
    "animal",
    "nature",
    "horn"
  ],
  char: "🦏",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const goat = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐐",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const ram = {
  keywords: [
    "animal",
    "sheep",
    "nature"
  ],
  char: "🐏",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sheep = {
  keywords: [
    "animal",
    "nature",
    "wool",
    "shipit"
  ],
  char: "🐑",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const racehorse = {
  keywords: [
    "animal",
    "gamble",
    "luck"
  ],
  char: "🐎",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const pig2 = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🐖",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rat = {
  keywords: [
    "animal",
    "mouse",
    "rodent"
  ],
  char: "🐀",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const mouse2 = {
  keywords: [
    "animal",
    "nature",
    "rodent"
  ],
  char: "🐁",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rooster = {
  keywords: [
    "animal",
    "nature",
    "chicken"
  ],
  char: "🐓",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const turkey = {
  keywords: [
    "animal",
    "bird"
  ],
  char: "🦃",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dove = {
  keywords: [
    "animal",
    "bird"
  ],
  char: "🕊",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dog2 = {
  keywords: [
    "animal",
    "nature",
    "friend",
    "doge",
    "pet",
    "faithful"
  ],
  char: "🐕",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const poodle = {
  keywords: [
    "dog",
    "animal",
    "101",
    "nature",
    "pet"
  ],
  char: "🐩",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cat2 = {
  keywords: [
    "animal",
    "meow",
    "pet",
    "cats"
  ],
  char: "🐈",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rabbit2 = {
  keywords: [
    "animal",
    "nature",
    "pet",
    "magic",
    "spring"
  ],
  char: "🐇",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const chipmunk = {
  keywords: [
    "animal",
    "nature",
    "rodent",
    "squirrel"
  ],
  char: "🐿",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hedgehog = {
  keywords: [
    "animal",
    "nature",
    "spiny"
  ],
  char: "🦔",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const raccoon = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🦝",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const llama = {
  keywords: [
    "animal",
    "nature",
    "alpaca"
  ],
  char: "🦙",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hippopotamus = {
  keywords: [
    "animal",
    "nature"
  ],
  char: "🦛",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const kangaroo = {
  keywords: [
    "animal",
    "nature",
    "australia",
    "joey",
    "hop",
    "marsupial"
  ],
  char: "🦘",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const badger = {
  keywords: [
    "animal",
    "nature",
    "honey"
  ],
  char: "🦡",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const swan = {
  keywords: [
    "animal",
    "nature",
    "bird"
  ],
  char: "🦢",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const peacock = {
  keywords: [
    "animal",
    "nature",
    "peahen",
    "bird"
  ],
  char: "🦚",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const parrot = {
  keywords: [
    "animal",
    "nature",
    "bird",
    "pirate",
    "talk"
  ],
  char: "🦜",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const lobster = {
  keywords: [
    "animal",
    "nature",
    "bisque",
    "claws",
    "seafood"
  ],
  char: "🦞",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const mosquito = {
  keywords: [
    "animal",
    "nature",
    "insect",
    "malaria"
  ],
  char: "🦟",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const paw_prints = {
  keywords: [
    "animal",
    "tracking",
    "footprints",
    "dog",
    "cat",
    "pet",
    "feet"
  ],
  char: "🐾",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dragon = {
  keywords: [
    "animal",
    "myth",
    "nature",
    "chinese",
    "green"
  ],
  char: "🐉",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dragon_face = {
  keywords: [
    "animal",
    "myth",
    "nature",
    "chinese",
    "green"
  ],
  char: "🐲",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cactus = {
  keywords: [
    "vegetable",
    "plant",
    "nature"
  ],
  char: "🌵",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const christmas_tree = {
  keywords: [
    "festival",
    "vacation",
    "december",
    "xmas",
    "celebration"
  ],
  char: "🎄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const evergreen_tree = {
  keywords: [
    "plant",
    "nature"
  ],
  char: "🌲",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const deciduous_tree = {
  keywords: [
    "plant",
    "nature"
  ],
  char: "🌳",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const palm_tree = {
  keywords: [
    "plant",
    "vegetable",
    "nature",
    "summer",
    "beach",
    "mojito",
    "tropical"
  ],
  char: "🌴",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const seedling = {
  keywords: [
    "plant",
    "nature",
    "grass",
    "lawn",
    "spring"
  ],
  char: "🌱",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const herb = {
  keywords: [
    "vegetable",
    "plant",
    "medicine",
    "weed",
    "grass",
    "lawn"
  ],
  char: "🌿",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const shamrock = {
  keywords: [
    "vegetable",
    "plant",
    "nature",
    "irish",
    "clover"
  ],
  char: "☘",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const four_leaf_clover = {
  keywords: [
    "vegetable",
    "plant",
    "nature",
    "lucky",
    "irish"
  ],
  char: "🍀",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bamboo = {
  keywords: [
    "plant",
    "nature",
    "vegetable",
    "panda",
    "pine_decoration"
  ],
  char: "🎍",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tanabata_tree = {
  keywords: [
    "plant",
    "nature",
    "branch",
    "summer"
  ],
  char: "🎋",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const leaves = {
  keywords: [
    "nature",
    "plant",
    "tree",
    "vegetable",
    "grass",
    "lawn",
    "spring"
  ],
  char: "🍃",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const fallen_leaf = {
  keywords: [
    "nature",
    "plant",
    "vegetable",
    "leaves"
  ],
  char: "🍂",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const maple_leaf = {
  keywords: [
    "nature",
    "plant",
    "vegetable",
    "ca",
    "fall"
  ],
  char: "🍁",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const ear_of_rice = {
  keywords: [
    "nature",
    "plant"
  ],
  char: "🌾",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const hibiscus = {
  keywords: [
    "plant",
    "vegetable",
    "flowers",
    "beach"
  ],
  char: "🌺",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sunflower = {
  keywords: [
    "nature",
    "plant",
    "fall"
  ],
  char: "🌻",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const rose = {
  keywords: [
    "flowers",
    "valentines",
    "love",
    "spring"
  ],
  char: "🌹",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const wilted_flower = {
  keywords: [
    "plant",
    "nature",
    "flower"
  ],
  char: "🥀",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tulip = {
  keywords: [
    "flowers",
    "plant",
    "nature",
    "summer",
    "spring"
  ],
  char: "🌷",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const blossom = {
  keywords: [
    "nature",
    "flowers",
    "yellow"
  ],
  char: "🌼",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cherry_blossom = {
  keywords: [
    "nature",
    "plant",
    "spring",
    "flower"
  ],
  char: "🌸",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const bouquet = {
  keywords: [
    "flowers",
    "nature",
    "spring"
  ],
  char: "💐",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const mushroom = {
  keywords: [
    "plant",
    "vegetable"
  ],
  char: "🍄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const chestnut = {
  keywords: [
    "food",
    "squirrel"
  ],
  char: "🌰",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const jack_o_lantern = {
  keywords: [
    "halloween",
    "light",
    "pumpkin",
    "creepy",
    "fall"
  ],
  char: "🎃",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const shell = {
  keywords: [
    "nature",
    "sea",
    "beach"
  ],
  char: "🐚",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const spider_web = {
  keywords: [
    "animal",
    "insect",
    "arachnid",
    "silk"
  ],
  char: "🕸",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const earth_americas = {
  keywords: [
    "globe",
    "world",
    "USA",
    "international"
  ],
  char: "🌎",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const earth_africa = {
  keywords: [
    "globe",
    "world",
    "international"
  ],
  char: "🌍",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const earth_asia = {
  keywords: [
    "globe",
    "world",
    "east",
    "international"
  ],
  char: "🌏",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const full_moon = {
  keywords: [
    "nature",
    "yellow",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌕",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const waning_gibbous_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep",
    "waxing_gibbous_moon"
  ],
  char: "🌖",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const last_quarter_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌗",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const waning_crescent_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌘",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const new_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌑",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const waxing_crescent_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌒",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const first_quarter_moon = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌓",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const waxing_gibbous_moon = {
  keywords: [
    "nature",
    "night",
    "sky",
    "gray",
    "twilight",
    "planet",
    "space",
    "evening",
    "sleep"
  ],
  char: "🌔",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const new_moon_with_face = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌚",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const full_moon_with_face = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌝",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const first_quarter_moon_with_face = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌛",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const last_quarter_moon_with_face = {
  keywords: [
    "nature",
    "twilight",
    "planet",
    "space",
    "night",
    "evening",
    "sleep"
  ],
  char: "🌜",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sun_with_face = {
  keywords: [
    "nature",
    "morning",
    "sky"
  ],
  char: "🌞",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const crescent_moon = {
  keywords: [
    "night",
    "sleep",
    "sky",
    "evening",
    "magic"
  ],
  char: "🌙",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const star = {
  keywords: [
    "night",
    "yellow"
  ],
  char: "⭐",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const star2 = {
  keywords: [
    "night",
    "sparkle",
    "awesome",
    "good",
    "magic"
  ],
  char: "🌟",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dizzy = {
  keywords: [
    "star",
    "sparkle",
    "shoot",
    "magic"
  ],
  char: "💫",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sparkles = {
  keywords: [
    "stars",
    "shine",
    "shiny",
    "cool",
    "awesome",
    "good",
    "magic"
  ],
  char: "✨",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const comet = {
  keywords: [
    "space"
  ],
  char: "☄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sunny = {
  keywords: [
    "weather",
    "nature",
    "brightness",
    "summer",
    "beach",
    "spring"
  ],
  char: "☀️",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sun_behind_small_cloud = {
  keywords: [
    "weather"
  ],
  char: "🌤",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const partly_sunny = {
  keywords: [
    "weather",
    "nature",
    "cloudy",
    "morning",
    "fall",
    "spring"
  ],
  char: "⛅",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sun_behind_large_cloud = {
  keywords: [
    "weather"
  ],
  char: "🌥",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sun_behind_rain_cloud = {
  keywords: [
    "weather"
  ],
  char: "🌦",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cloud = {
  keywords: [
    "weather",
    "sky"
  ],
  char: "☁️",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cloud_with_rain = {
  keywords: [
    "weather"
  ],
  char: "🌧",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cloud_with_lightning_and_rain = {
  keywords: [
    "weather",
    "lightning"
  ],
  char: "⛈",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cloud_with_lightning = {
  keywords: [
    "weather",
    "thunder"
  ],
  char: "🌩",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const zap = {
  keywords: [
    "thunder",
    "weather",
    "lightning bolt",
    "fast"
  ],
  char: "⚡",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const fire = {
  keywords: [
    "hot",
    "cook",
    "flame"
  ],
  char: "🔥",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const boom = {
  keywords: [
    "bomb",
    "explode",
    "explosion",
    "collision",
    "blown"
  ],
  char: "💥",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const snowflake = {
  keywords: [
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas"
  ],
  char: "❄️",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const cloud_with_snow = {
  keywords: [
    "weather"
  ],
  char: "🌨",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const snowman = {
  keywords: [
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas",
    "frozen",
    "without_snow"
  ],
  char: "⛄",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const snowman_with_snow = {
  keywords: [
    "winter",
    "season",
    "cold",
    "weather",
    "christmas",
    "xmas",
    "frozen"
  ],
  char: "☃",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const wind_face = {
  keywords: [
    "gust",
    "air"
  ],
  char: "🌬",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const dash = {
  keywords: [
    "wind",
    "air",
    "fast",
    "shoo",
    "fart",
    "smoke",
    "puff"
  ],
  char: "💨",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const tornado = {
  keywords: [
    "weather",
    "cyclone",
    "twister"
  ],
  char: "🌪",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const fog = {
  keywords: [
    "weather"
  ],
  char: "🌫",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const open_umbrella = {
  keywords: [
    "weather",
    "spring"
  ],
  char: "☂",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const umbrella = {
  keywords: [
    "rainy",
    "weather",
    "spring"
  ],
  char: "☔",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const droplet = {
  keywords: [
    "water",
    "drip",
    "faucet",
    "spring"
  ],
  char: "💧",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const sweat_drops = {
  keywords: [
    "water",
    "drip",
    "oops"
  ],
  char: "💦",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const ocean = {
  keywords: [
    "sea",
    "water",
    "wave",
    "nature",
    "tsunami",
    "disaster"
  ],
  char: "🌊",
  fitzpatrick_scale: false,
  category: "animals_and_nature"
};
const green_apple = {
  keywords: [
    "fruit",
    "nature"
  ],
  char: "🍏",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const apple = {
  keywords: [
    "fruit",
    "mac",
    "school"
  ],
  char: "🍎",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pear = {
  keywords: [
    "fruit",
    "nature",
    "food"
  ],
  char: "🍐",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const tangerine = {
  keywords: [
    "food",
    "fruit",
    "nature",
    "orange"
  ],
  char: "🍊",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const lemon = {
  keywords: [
    "fruit",
    "nature"
  ],
  char: "🍋",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const banana = {
  keywords: [
    "fruit",
    "food",
    "monkey"
  ],
  char: "🍌",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const watermelon = {
  keywords: [
    "fruit",
    "food",
    "picnic",
    "summer"
  ],
  char: "🍉",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const grapes = {
  keywords: [
    "fruit",
    "food",
    "wine"
  ],
  char: "🍇",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const strawberry = {
  keywords: [
    "fruit",
    "food",
    "nature"
  ],
  char: "🍓",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const melon = {
  keywords: [
    "fruit",
    "nature",
    "food"
  ],
  char: "🍈",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cherries = {
  keywords: [
    "food",
    "fruit"
  ],
  char: "🍒",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const peach = {
  keywords: [
    "fruit",
    "nature",
    "food"
  ],
  char: "🍑",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pineapple = {
  keywords: [
    "fruit",
    "nature",
    "food"
  ],
  char: "🍍",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const coconut = {
  keywords: [
    "fruit",
    "nature",
    "food",
    "palm"
  ],
  char: "🥥",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const kiwi_fruit = {
  keywords: [
    "fruit",
    "food"
  ],
  char: "🥝",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const mango = {
  keywords: [
    "fruit",
    "food",
    "tropical"
  ],
  char: "🥭",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const avocado = {
  keywords: [
    "fruit",
    "food"
  ],
  char: "🥑",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const broccoli = {
  keywords: [
    "fruit",
    "food",
    "vegetable"
  ],
  char: "🥦",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const tomato = {
  keywords: [
    "fruit",
    "vegetable",
    "nature",
    "food"
  ],
  char: "🍅",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const eggplant = {
  keywords: [
    "vegetable",
    "nature",
    "food",
    "aubergine"
  ],
  char: "🍆",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cucumber = {
  keywords: [
    "fruit",
    "food",
    "pickle"
  ],
  char: "🥒",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const carrot = {
  keywords: [
    "vegetable",
    "food",
    "orange"
  ],
  char: "🥕",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const hot_pepper = {
  keywords: [
    "food",
    "spicy",
    "chilli",
    "chili"
  ],
  char: "🌶",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const potato = {
  keywords: [
    "food",
    "tuber",
    "vegatable",
    "starch"
  ],
  char: "🥔",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const corn = {
  keywords: [
    "food",
    "vegetable",
    "plant"
  ],
  char: "🌽",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const leafy_greens = {
  keywords: [
    "food",
    "vegetable",
    "plant",
    "bok choy",
    "cabbage",
    "kale",
    "lettuce"
  ],
  char: "🥬",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const sweet_potato = {
  keywords: [
    "food",
    "nature"
  ],
  char: "🍠",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const peanuts = {
  keywords: [
    "food",
    "nut"
  ],
  char: "🥜",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const honey_pot = {
  keywords: [
    "bees",
    "sweet",
    "kitchen"
  ],
  char: "🍯",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const croissant = {
  keywords: [
    "food",
    "bread",
    "french"
  ],
  char: "🥐",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bread = {
  keywords: [
    "food",
    "wheat",
    "breakfast",
    "toast"
  ],
  char: "🍞",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const baguette_bread = {
  keywords: [
    "food",
    "bread",
    "french"
  ],
  char: "🥖",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bagel = {
  keywords: [
    "food",
    "bread",
    "bakery",
    "schmear"
  ],
  char: "🥯",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pretzel = {
  keywords: [
    "food",
    "bread",
    "twisted"
  ],
  char: "🥨",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cheese = {
  keywords: [
    "food",
    "chadder"
  ],
  char: "🧀",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const egg = {
  keywords: [
    "food",
    "chicken",
    "breakfast"
  ],
  char: "🥚",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bacon = {
  keywords: [
    "food",
    "breakfast",
    "pork",
    "pig",
    "meat"
  ],
  char: "🥓",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const steak = {
  keywords: [
    "food",
    "cow",
    "meat",
    "cut",
    "chop",
    "lambchop",
    "porkchop"
  ],
  char: "🥩",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pancakes = {
  keywords: [
    "food",
    "breakfast",
    "flapjacks",
    "hotcakes"
  ],
  char: "🥞",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const poultry_leg = {
  keywords: [
    "food",
    "meat",
    "drumstick",
    "bird",
    "chicken",
    "turkey"
  ],
  char: "🍗",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const meat_on_bone = {
  keywords: [
    "good",
    "food",
    "drumstick"
  ],
  char: "🍖",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bone = {
  keywords: [
    "skeleton"
  ],
  char: "🦴",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fried_shrimp = {
  keywords: [
    "food",
    "animal",
    "appetizer",
    "summer"
  ],
  char: "🍤",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fried_egg = {
  keywords: [
    "food",
    "breakfast",
    "kitchen",
    "egg"
  ],
  char: "🍳",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const hamburger = {
  keywords: [
    "meat",
    "fast food",
    "beef",
    "cheeseburger",
    "mcdonalds",
    "burger king"
  ],
  char: "🍔",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fries = {
  keywords: [
    "chips",
    "snack",
    "fast food"
  ],
  char: "🍟",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const stuffed_flatbread = {
  keywords: [
    "food",
    "flatbread",
    "stuffed",
    "gyro"
  ],
  char: "🥙",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const hotdog = {
  keywords: [
    "food",
    "frankfurter"
  ],
  char: "🌭",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pizza = {
  keywords: [
    "food",
    "party"
  ],
  char: "🍕",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const sandwich = {
  keywords: [
    "food",
    "lunch",
    "bread"
  ],
  char: "🥪",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const canned_food = {
  keywords: [
    "food",
    "soup"
  ],
  char: "🥫",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const spaghetti = {
  keywords: [
    "food",
    "italian",
    "noodle"
  ],
  char: "🍝",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const taco = {
  keywords: [
    "food",
    "mexican"
  ],
  char: "🌮",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const burrito = {
  keywords: [
    "food",
    "mexican"
  ],
  char: "🌯",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const green_salad = {
  keywords: [
    "food",
    "healthy",
    "lettuce"
  ],
  char: "🥗",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const shallow_pan_of_food = {
  keywords: [
    "food",
    "cooking",
    "casserole",
    "paella"
  ],
  char: "🥘",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const ramen = {
  keywords: [
    "food",
    "japanese",
    "noodle",
    "chopsticks"
  ],
  char: "🍜",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const stew = {
  keywords: [
    "food",
    "meat",
    "soup"
  ],
  char: "🍲",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fish_cake = {
  keywords: [
    "food",
    "japan",
    "sea",
    "beach",
    "narutomaki",
    "pink",
    "swirl",
    "kamaboko",
    "surimi",
    "ramen"
  ],
  char: "🍥",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fortune_cookie = {
  keywords: [
    "food",
    "prophecy"
  ],
  char: "🥠",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const sushi = {
  keywords: [
    "food",
    "fish",
    "japanese",
    "rice"
  ],
  char: "🍣",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bento = {
  keywords: [
    "food",
    "japanese",
    "box"
  ],
  char: "🍱",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const curry = {
  keywords: [
    "food",
    "spicy",
    "hot",
    "indian"
  ],
  char: "🍛",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const rice_ball = {
  keywords: [
    "food",
    "japanese"
  ],
  char: "🍙",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const rice = {
  keywords: [
    "food",
    "china",
    "asian"
  ],
  char: "🍚",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const rice_cracker = {
  keywords: [
    "food",
    "japanese"
  ],
  char: "🍘",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const oden = {
  keywords: [
    "food",
    "japanese"
  ],
  char: "🍢",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const dango = {
  keywords: [
    "food",
    "dessert",
    "sweet",
    "japanese",
    "barbecue",
    "meat"
  ],
  char: "🍡",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const shaved_ice = {
  keywords: [
    "hot",
    "dessert",
    "summer"
  ],
  char: "🍧",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const ice_cream = {
  keywords: [
    "food",
    "hot",
    "dessert"
  ],
  char: "🍨",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const icecream = {
  keywords: [
    "food",
    "hot",
    "dessert",
    "summer"
  ],
  char: "🍦",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const pie = {
  keywords: [
    "food",
    "dessert",
    "pastry"
  ],
  char: "🥧",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cake = {
  keywords: [
    "food",
    "dessert"
  ],
  char: "🍰",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cupcake = {
  keywords: [
    "food",
    "dessert",
    "bakery",
    "sweet"
  ],
  char: "🧁",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const moon_cake = {
  keywords: [
    "food",
    "autumn"
  ],
  char: "🥮",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const birthday = {
  keywords: [
    "food",
    "dessert",
    "cake"
  ],
  char: "🎂",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const custard = {
  keywords: [
    "dessert",
    "food"
  ],
  char: "🍮",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const candy = {
  keywords: [
    "snack",
    "dessert",
    "sweet",
    "lolly"
  ],
  char: "🍬",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const lollipop = {
  keywords: [
    "food",
    "snack",
    "candy",
    "sweet"
  ],
  char: "🍭",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const chocolate_bar = {
  keywords: [
    "food",
    "snack",
    "dessert",
    "sweet"
  ],
  char: "🍫",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const popcorn = {
  keywords: [
    "food",
    "movie theater",
    "films",
    "snack"
  ],
  char: "🍿",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const dumpling = {
  keywords: [
    "food",
    "empanada",
    "pierogi",
    "potsticker"
  ],
  char: "🥟",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const doughnut = {
  keywords: [
    "food",
    "dessert",
    "snack",
    "sweet",
    "donut"
  ],
  char: "🍩",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cookie = {
  keywords: [
    "food",
    "snack",
    "oreo",
    "chocolate",
    "sweet",
    "dessert"
  ],
  char: "🍪",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const milk_glass = {
  keywords: [
    "beverage",
    "drink",
    "cow"
  ],
  char: "🥛",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const beer = {
  keywords: [
    "relax",
    "beverage",
    "drink",
    "drunk",
    "party",
    "pub",
    "summer",
    "alcohol",
    "booze"
  ],
  char: "🍺",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const beers = {
  keywords: [
    "relax",
    "beverage",
    "drink",
    "drunk",
    "party",
    "pub",
    "summer",
    "alcohol",
    "booze"
  ],
  char: "🍻",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const clinking_glasses = {
  keywords: [
    "beverage",
    "drink",
    "party",
    "alcohol",
    "celebrate",
    "cheers",
    "wine",
    "champagne",
    "toast"
  ],
  char: "🥂",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const wine_glass = {
  keywords: [
    "drink",
    "beverage",
    "drunk",
    "alcohol",
    "booze"
  ],
  char: "🍷",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const tumbler_glass = {
  keywords: [
    "drink",
    "beverage",
    "drunk",
    "alcohol",
    "liquor",
    "booze",
    "bourbon",
    "scotch",
    "whisky",
    "glass",
    "shot"
  ],
  char: "🥃",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cocktail = {
  keywords: [
    "drink",
    "drunk",
    "alcohol",
    "beverage",
    "booze",
    "mojito"
  ],
  char: "🍸",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const tropical_drink = {
  keywords: [
    "beverage",
    "cocktail",
    "summer",
    "beach",
    "alcohol",
    "booze",
    "mojito"
  ],
  char: "🍹",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const champagne = {
  keywords: [
    "drink",
    "wine",
    "bottle",
    "celebration"
  ],
  char: "🍾",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const sake = {
  keywords: [
    "wine",
    "drink",
    "drunk",
    "beverage",
    "japanese",
    "alcohol",
    "booze"
  ],
  char: "🍶",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const tea = {
  keywords: [
    "drink",
    "bowl",
    "breakfast",
    "green",
    "british"
  ],
  char: "🍵",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const cup_with_straw = {
  keywords: [
    "drink",
    "soda"
  ],
  char: "🥤",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const coffee = {
  keywords: [
    "beverage",
    "caffeine",
    "latte",
    "espresso"
  ],
  char: "☕",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const baby_bottle = {
  keywords: [
    "food",
    "container",
    "milk"
  ],
  char: "🍼",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const salt = {
  keywords: [
    "condiment",
    "shaker"
  ],
  char: "🧂",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const spoon = {
  keywords: [
    "cutlery",
    "kitchen",
    "tableware"
  ],
  char: "🥄",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const fork_and_knife = {
  keywords: [
    "cutlery",
    "kitchen"
  ],
  char: "🍴",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const plate_with_cutlery = {
  keywords: [
    "food",
    "eat",
    "meal",
    "lunch",
    "dinner",
    "restaurant"
  ],
  char: "🍽",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const bowl_with_spoon = {
  keywords: [
    "food",
    "breakfast",
    "cereal",
    "oatmeal",
    "porridge"
  ],
  char: "🥣",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const takeout_box = {
  keywords: [
    "food",
    "leftovers"
  ],
  char: "🥡",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const chopsticks = {
  keywords: [
    "food"
  ],
  char: "🥢",
  fitzpatrick_scale: false,
  category: "food_and_drink"
};
const soccer = {
  keywords: [
    "sports",
    "football"
  ],
  char: "⚽",
  fitzpatrick_scale: false,
  category: "activity"
};
const basketball = {
  keywords: [
    "sports",
    "balls",
    "NBA"
  ],
  char: "🏀",
  fitzpatrick_scale: false,
  category: "activity"
};
const football = {
  keywords: [
    "sports",
    "balls",
    "NFL"
  ],
  char: "🏈",
  fitzpatrick_scale: false,
  category: "activity"
};
const baseball = {
  keywords: [
    "sports",
    "balls"
  ],
  char: "⚾",
  fitzpatrick_scale: false,
  category: "activity"
};
const softball = {
  keywords: [
    "sports",
    "balls"
  ],
  char: "🥎",
  fitzpatrick_scale: false,
  category: "activity"
};
const tennis = {
  keywords: [
    "sports",
    "balls",
    "green"
  ],
  char: "🎾",
  fitzpatrick_scale: false,
  category: "activity"
};
const volleyball = {
  keywords: [
    "sports",
    "balls"
  ],
  char: "🏐",
  fitzpatrick_scale: false,
  category: "activity"
};
const rugby_football = {
  keywords: [
    "sports",
    "team"
  ],
  char: "🏉",
  fitzpatrick_scale: false,
  category: "activity"
};
const flying_disc = {
  keywords: [
    "sports",
    "frisbee",
    "ultimate"
  ],
  char: "🥏",
  fitzpatrick_scale: false,
  category: "activity"
};
const golf = {
  keywords: [
    "sports",
    "business",
    "flag",
    "hole",
    "summer"
  ],
  char: "⛳",
  fitzpatrick_scale: false,
  category: "activity"
};
const golfing_woman = {
  keywords: [
    "sports",
    "business",
    "woman",
    "female"
  ],
  char: "🏌️‍♀️",
  fitzpatrick_scale: false,
  category: "activity"
};
const golfing_man = {
  keywords: [
    "sports",
    "business"
  ],
  char: "🏌",
  fitzpatrick_scale: true,
  category: "activity"
};
const ping_pong = {
  keywords: [
    "sports",
    "pingpong"
  ],
  char: "🏓",
  fitzpatrick_scale: false,
  category: "activity"
};
const badminton = {
  keywords: [
    "sports"
  ],
  char: "🏸",
  fitzpatrick_scale: false,
  category: "activity"
};
const goal_net = {
  keywords: [
    "sports"
  ],
  char: "🥅",
  fitzpatrick_scale: false,
  category: "activity"
};
const ice_hockey = {
  keywords: [
    "sports"
  ],
  char: "🏒",
  fitzpatrick_scale: false,
  category: "activity"
};
const field_hockey = {
  keywords: [
    "sports"
  ],
  char: "🏑",
  fitzpatrick_scale: false,
  category: "activity"
};
const lacrosse = {
  keywords: [
    "sports",
    "ball",
    "stick"
  ],
  char: "🥍",
  fitzpatrick_scale: false,
  category: "activity"
};
const cricket = {
  keywords: [
    "sports"
  ],
  char: "🏏",
  fitzpatrick_scale: false,
  category: "activity"
};
const ski = {
  keywords: [
    "sports",
    "winter",
    "cold",
    "snow"
  ],
  char: "🎿",
  fitzpatrick_scale: false,
  category: "activity"
};
const skier = {
  keywords: [
    "sports",
    "winter",
    "snow"
  ],
  char: "⛷",
  fitzpatrick_scale: false,
  category: "activity"
};
const snowboarder = {
  keywords: [
    "sports",
    "winter"
  ],
  char: "🏂",
  fitzpatrick_scale: true,
  category: "activity"
};
const person_fencing = {
  keywords: [
    "sports",
    "fencing",
    "sword"
  ],
  char: "🤺",
  fitzpatrick_scale: false,
  category: "activity"
};
const women_wrestling = {
  keywords: [
    "sports",
    "wrestlers"
  ],
  char: "🤼‍♀️",
  fitzpatrick_scale: false,
  category: "activity"
};
const men_wrestling = {
  keywords: [
    "sports",
    "wrestlers"
  ],
  char: "🤼‍♂️",
  fitzpatrick_scale: false,
  category: "activity"
};
const woman_cartwheeling = {
  keywords: [
    "gymnastics"
  ],
  char: "🤸‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const man_cartwheeling = {
  keywords: [
    "gymnastics"
  ],
  char: "🤸‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const woman_playing_handball = {
  keywords: [
    "sports"
  ],
  char: "🤾‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const man_playing_handball = {
  keywords: [
    "sports"
  ],
  char: "🤾‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const ice_skate = {
  keywords: [
    "sports"
  ],
  char: "⛸",
  fitzpatrick_scale: false,
  category: "activity"
};
const curling_stone = {
  keywords: [
    "sports"
  ],
  char: "🥌",
  fitzpatrick_scale: false,
  category: "activity"
};
const skateboard = {
  keywords: [
    "board"
  ],
  char: "🛹",
  fitzpatrick_scale: false,
  category: "activity"
};
const sled = {
  keywords: [
    "sleigh",
    "luge",
    "toboggan"
  ],
  char: "🛷",
  fitzpatrick_scale: false,
  category: "activity"
};
const bow_and_arrow = {
  keywords: [
    "sports"
  ],
  char: "🏹",
  fitzpatrick_scale: false,
  category: "activity"
};
const fishing_pole_and_fish = {
  keywords: [
    "food",
    "hobby",
    "summer"
  ],
  char: "🎣",
  fitzpatrick_scale: false,
  category: "activity"
};
const boxing_glove = {
  keywords: [
    "sports",
    "fighting"
  ],
  char: "🥊",
  fitzpatrick_scale: false,
  category: "activity"
};
const martial_arts_uniform = {
  keywords: [
    "judo",
    "karate",
    "taekwondo"
  ],
  char: "🥋",
  fitzpatrick_scale: false,
  category: "activity"
};
const rowing_woman = {
  keywords: [
    "sports",
    "hobby",
    "water",
    "ship",
    "woman",
    "female"
  ],
  char: "🚣‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const rowing_man = {
  keywords: [
    "sports",
    "hobby",
    "water",
    "ship"
  ],
  char: "🚣",
  fitzpatrick_scale: true,
  category: "activity"
};
const climbing_woman = {
  keywords: [
    "sports",
    "hobby",
    "woman",
    "female",
    "rock"
  ],
  char: "🧗‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const climbing_man = {
  keywords: [
    "sports",
    "hobby",
    "man",
    "male",
    "rock"
  ],
  char: "🧗‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const swimming_woman = {
  keywords: [
    "sports",
    "exercise",
    "human",
    "athlete",
    "water",
    "summer",
    "woman",
    "female"
  ],
  char: "🏊‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const swimming_man = {
  keywords: [
    "sports",
    "exercise",
    "human",
    "athlete",
    "water",
    "summer"
  ],
  char: "🏊",
  fitzpatrick_scale: true,
  category: "activity"
};
const woman_playing_water_polo = {
  keywords: [
    "sports",
    "pool"
  ],
  char: "🤽‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const man_playing_water_polo = {
  keywords: [
    "sports",
    "pool"
  ],
  char: "🤽‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const woman_in_lotus_position = {
  keywords: [
    "woman",
    "female",
    "meditation",
    "yoga",
    "serenity",
    "zen",
    "mindfulness"
  ],
  char: "🧘‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const man_in_lotus_position = {
  keywords: [
    "man",
    "male",
    "meditation",
    "yoga",
    "serenity",
    "zen",
    "mindfulness"
  ],
  char: "🧘‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const surfing_woman = {
  keywords: [
    "sports",
    "ocean",
    "sea",
    "summer",
    "beach",
    "woman",
    "female"
  ],
  char: "🏄‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const surfing_man = {
  keywords: [
    "sports",
    "ocean",
    "sea",
    "summer",
    "beach"
  ],
  char: "🏄",
  fitzpatrick_scale: true,
  category: "activity"
};
const bath = {
  keywords: [
    "clean",
    "shower",
    "bathroom"
  ],
  char: "🛀",
  fitzpatrick_scale: true,
  category: "activity"
};
const basketball_woman = {
  keywords: [
    "sports",
    "human",
    "woman",
    "female"
  ],
  char: "⛹️‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const basketball_man = {
  keywords: [
    "sports",
    "human"
  ],
  char: "⛹",
  fitzpatrick_scale: true,
  category: "activity"
};
const weight_lifting_woman = {
  keywords: [
    "sports",
    "training",
    "exercise",
    "woman",
    "female"
  ],
  char: "🏋️‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const weight_lifting_man = {
  keywords: [
    "sports",
    "training",
    "exercise"
  ],
  char: "🏋",
  fitzpatrick_scale: true,
  category: "activity"
};
const biking_woman = {
  keywords: [
    "sports",
    "bike",
    "exercise",
    "hipster",
    "woman",
    "female"
  ],
  char: "🚴‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const biking_man = {
  keywords: [
    "sports",
    "bike",
    "exercise",
    "hipster"
  ],
  char: "🚴",
  fitzpatrick_scale: true,
  category: "activity"
};
const mountain_biking_woman = {
  keywords: [
    "transportation",
    "sports",
    "human",
    "race",
    "bike",
    "woman",
    "female"
  ],
  char: "🚵‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const mountain_biking_man = {
  keywords: [
    "transportation",
    "sports",
    "human",
    "race",
    "bike"
  ],
  char: "🚵",
  fitzpatrick_scale: true,
  category: "activity"
};
const horse_racing = {
  keywords: [
    "animal",
    "betting",
    "competition",
    "gambling",
    "luck"
  ],
  char: "🏇",
  fitzpatrick_scale: true,
  category: "activity"
};
const business_suit_levitating = {
  keywords: [
    "suit",
    "business",
    "levitate",
    "hover",
    "jump"
  ],
  char: "🕴",
  fitzpatrick_scale: true,
  category: "activity"
};
const trophy = {
  keywords: [
    "win",
    "award",
    "contest",
    "place",
    "ftw",
    "ceremony"
  ],
  char: "🏆",
  fitzpatrick_scale: false,
  category: "activity"
};
const running_shirt_with_sash = {
  keywords: [
    "play",
    "pageant"
  ],
  char: "🎽",
  fitzpatrick_scale: false,
  category: "activity"
};
const medal_sports = {
  keywords: [
    "award",
    "winning"
  ],
  char: "🏅",
  fitzpatrick_scale: false,
  category: "activity"
};
const medal_military = {
  keywords: [
    "award",
    "winning",
    "army"
  ],
  char: "🎖",
  fitzpatrick_scale: false,
  category: "activity"
};
const reminder_ribbon = {
  keywords: [
    "sports",
    "cause",
    "support",
    "awareness"
  ],
  char: "🎗",
  fitzpatrick_scale: false,
  category: "activity"
};
const rosette = {
  keywords: [
    "flower",
    "decoration",
    "military"
  ],
  char: "🏵",
  fitzpatrick_scale: false,
  category: "activity"
};
const ticket = {
  keywords: [
    "event",
    "concert",
    "pass"
  ],
  char: "🎫",
  fitzpatrick_scale: false,
  category: "activity"
};
const tickets = {
  keywords: [
    "sports",
    "concert",
    "entrance"
  ],
  char: "🎟",
  fitzpatrick_scale: false,
  category: "activity"
};
const performing_arts = {
  keywords: [
    "acting",
    "theater",
    "drama"
  ],
  char: "🎭",
  fitzpatrick_scale: false,
  category: "activity"
};
const art = {
  keywords: [
    "design",
    "paint",
    "draw",
    "colors"
  ],
  char: "🎨",
  fitzpatrick_scale: false,
  category: "activity"
};
const circus_tent = {
  keywords: [
    "festival",
    "carnival",
    "party"
  ],
  char: "🎪",
  fitzpatrick_scale: false,
  category: "activity"
};
const woman_juggling = {
  keywords: [
    "juggle",
    "balance",
    "skill",
    "multitask"
  ],
  char: "🤹‍♀️",
  fitzpatrick_scale: true,
  category: "activity"
};
const man_juggling = {
  keywords: [
    "juggle",
    "balance",
    "skill",
    "multitask"
  ],
  char: "🤹‍♂️",
  fitzpatrick_scale: true,
  category: "activity"
};
const microphone = {
  keywords: [
    "sound",
    "music",
    "PA",
    "sing",
    "talkshow"
  ],
  char: "🎤",
  fitzpatrick_scale: false,
  category: "activity"
};
const headphones = {
  keywords: [
    "music",
    "score",
    "gadgets"
  ],
  char: "🎧",
  fitzpatrick_scale: false,
  category: "activity"
};
const musical_score = {
  keywords: [
    "treble",
    "clef",
    "compose"
  ],
  char: "🎼",
  fitzpatrick_scale: false,
  category: "activity"
};
const musical_keyboard = {
  keywords: [
    "piano",
    "instrument",
    "compose"
  ],
  char: "🎹",
  fitzpatrick_scale: false,
  category: "activity"
};
const drum = {
  keywords: [
    "music",
    "instrument",
    "drumsticks",
    "snare"
  ],
  char: "🥁",
  fitzpatrick_scale: false,
  category: "activity"
};
const saxophone = {
  keywords: [
    "music",
    "instrument",
    "jazz",
    "blues"
  ],
  char: "🎷",
  fitzpatrick_scale: false,
  category: "activity"
};
const trumpet = {
  keywords: [
    "music",
    "brass"
  ],
  char: "🎺",
  fitzpatrick_scale: false,
  category: "activity"
};
const guitar = {
  keywords: [
    "music",
    "instrument"
  ],
  char: "🎸",
  fitzpatrick_scale: false,
  category: "activity"
};
const violin = {
  keywords: [
    "music",
    "instrument",
    "orchestra",
    "symphony"
  ],
  char: "🎻",
  fitzpatrick_scale: false,
  category: "activity"
};
const clapper = {
  keywords: [
    "movie",
    "film",
    "record"
  ],
  char: "🎬",
  fitzpatrick_scale: false,
  category: "activity"
};
const video_game = {
  keywords: [
    "play",
    "console",
    "PS4",
    "controller"
  ],
  char: "🎮",
  fitzpatrick_scale: false,
  category: "activity"
};
const space_invader = {
  keywords: [
    "game",
    "arcade",
    "play"
  ],
  char: "👾",
  fitzpatrick_scale: false,
  category: "activity"
};
const dart = {
  keywords: [
    "game",
    "play",
    "bar",
    "target",
    "bullseye"
  ],
  char: "🎯",
  fitzpatrick_scale: false,
  category: "activity"
};
const game_die = {
  keywords: [
    "dice",
    "random",
    "tabletop",
    "play",
    "luck"
  ],
  char: "🎲",
  fitzpatrick_scale: false,
  category: "activity"
};
const chess_pawn = {
  keywords: [
    "expendable"
  ],
  char: "♟",
  fitzpatrick_scale: false,
  category: "activity"
};
const slot_machine = {
  keywords: [
    "bet",
    "gamble",
    "vegas",
    "fruit machine",
    "luck",
    "casino"
  ],
  char: "🎰",
  fitzpatrick_scale: false,
  category: "activity"
};
const jigsaw = {
  keywords: [
    "interlocking",
    "puzzle",
    "piece"
  ],
  char: "🧩",
  fitzpatrick_scale: false,
  category: "activity"
};
const bowling = {
  keywords: [
    "sports",
    "fun",
    "play"
  ],
  char: "🎳",
  fitzpatrick_scale: false,
  category: "activity"
};
const red_car = {
  keywords: [
    "red",
    "transportation",
    "vehicle"
  ],
  char: "🚗",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const taxi = {
  keywords: [
    "uber",
    "vehicle",
    "cars",
    "transportation"
  ],
  char: "🚕",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const blue_car = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚙",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bus = {
  keywords: [
    "car",
    "vehicle",
    "transportation"
  ],
  char: "🚌",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const trolleybus = {
  keywords: [
    "bart",
    "transportation",
    "vehicle"
  ],
  char: "🚎",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const racing_car = {
  keywords: [
    "sports",
    "race",
    "fast",
    "formula",
    "f1"
  ],
  char: "🏎",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const police_car = {
  keywords: [
    "vehicle",
    "cars",
    "transportation",
    "law",
    "legal",
    "enforcement"
  ],
  char: "🚓",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const ambulance = {
  keywords: [
    "health",
    "911",
    "hospital"
  ],
  char: "🚑",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const fire_engine = {
  keywords: [
    "transportation",
    "cars",
    "vehicle"
  ],
  char: "🚒",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const minibus = {
  keywords: [
    "vehicle",
    "car",
    "transportation"
  ],
  char: "🚐",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const truck = {
  keywords: [
    "cars",
    "transportation"
  ],
  char: "🚚",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const articulated_lorry = {
  keywords: [
    "vehicle",
    "cars",
    "transportation",
    "express"
  ],
  char: "🚛",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const tractor = {
  keywords: [
    "vehicle",
    "car",
    "farming",
    "agriculture"
  ],
  char: "🚜",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const kick_scooter = {
  keywords: [
    "vehicle",
    "kick",
    "razor"
  ],
  char: "🛴",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const motorcycle = {
  keywords: [
    "race",
    "sports",
    "fast"
  ],
  char: "🏍",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bike = {
  keywords: [
    "sports",
    "bicycle",
    "exercise",
    "hipster"
  ],
  char: "🚲",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const motor_scooter = {
  keywords: [
    "vehicle",
    "vespa",
    "sasha"
  ],
  char: "🛵",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const rotating_light = {
  keywords: [
    "police",
    "ambulance",
    "911",
    "emergency",
    "alert",
    "error",
    "pinged",
    "law",
    "legal"
  ],
  char: "🚨",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const oncoming_police_car = {
  keywords: [
    "vehicle",
    "law",
    "legal",
    "enforcement",
    "911"
  ],
  char: "🚔",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const oncoming_bus = {
  keywords: [
    "vehicle",
    "transportation"
  ],
  char: "🚍",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const oncoming_automobile = {
  keywords: [
    "car",
    "vehicle",
    "transportation"
  ],
  char: "🚘",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const oncoming_taxi = {
  keywords: [
    "vehicle",
    "cars",
    "uber"
  ],
  char: "🚖",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const aerial_tramway = {
  keywords: [
    "transportation",
    "vehicle",
    "ski"
  ],
  char: "🚡",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mountain_cableway = {
  keywords: [
    "transportation",
    "vehicle",
    "ski"
  ],
  char: "🚠",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const suspension_railway = {
  keywords: [
    "vehicle",
    "transportation"
  ],
  char: "🚟",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const railway_car = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚃",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const train = {
  keywords: [
    "transportation",
    "vehicle",
    "carriage",
    "public",
    "travel"
  ],
  char: "🚋",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const monorail = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚝",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bullettrain_side = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚄",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bullettrain_front = {
  keywords: [
    "transportation",
    "vehicle",
    "speed",
    "fast",
    "public",
    "travel"
  ],
  char: "🚅",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const light_rail = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚈",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mountain_railway = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚞",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const steam_locomotive = {
  keywords: [
    "transportation",
    "vehicle",
    "train"
  ],
  char: "🚂",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const train2 = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚆",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const metro = {
  keywords: [
    "transportation",
    "blue-square",
    "mrt",
    "underground",
    "tube"
  ],
  char: "🚇",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const tram = {
  keywords: [
    "transportation",
    "vehicle"
  ],
  char: "🚊",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const station = {
  keywords: [
    "transportation",
    "vehicle",
    "public"
  ],
  char: "🚉",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const flying_saucer = {
  keywords: [
    "transportation",
    "vehicle",
    "ufo"
  ],
  char: "🛸",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const helicopter = {
  keywords: [
    "transportation",
    "vehicle",
    "fly"
  ],
  char: "🚁",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const small_airplane = {
  keywords: [
    "flight",
    "transportation",
    "fly",
    "vehicle"
  ],
  char: "🛩",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const airplane = {
  keywords: [
    "vehicle",
    "transportation",
    "flight",
    "fly"
  ],
  char: "✈️",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const flight_departure = {
  keywords: [
    "airport",
    "flight",
    "landing"
  ],
  char: "🛫",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const flight_arrival = {
  keywords: [
    "airport",
    "flight",
    "boarding"
  ],
  char: "🛬",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const sailboat = {
  keywords: [
    "ship",
    "summer",
    "transportation",
    "water",
    "sailing"
  ],
  char: "⛵",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const motor_boat = {
  keywords: [
    "ship"
  ],
  char: "🛥",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const speedboat = {
  keywords: [
    "ship",
    "transportation",
    "vehicle",
    "summer"
  ],
  char: "🚤",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const ferry = {
  keywords: [
    "boat",
    "ship",
    "yacht"
  ],
  char: "⛴",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const passenger_ship = {
  keywords: [
    "yacht",
    "cruise",
    "ferry"
  ],
  char: "🛳",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const rocket = {
  keywords: [
    "launch",
    "ship",
    "staffmode",
    "NASA",
    "outer space",
    "outer_space",
    "fly"
  ],
  char: "🚀",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const artificial_satellite = {
  keywords: [
    "communication",
    "gps",
    "orbit",
    "spaceflight",
    "NASA",
    "ISS"
  ],
  char: "🛰",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const seat = {
  keywords: [
    "sit",
    "airplane",
    "transport",
    "bus",
    "flight",
    "fly"
  ],
  char: "💺",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const canoe = {
  keywords: [
    "boat",
    "paddle",
    "water",
    "ship"
  ],
  char: "🛶",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const anchor = {
  keywords: [
    "ship",
    "ferry",
    "sea",
    "boat"
  ],
  char: "⚓",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const construction = {
  keywords: [
    "wip",
    "progress",
    "caution",
    "warning"
  ],
  char: "🚧",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const fuelpump = {
  keywords: [
    "gas station",
    "petroleum"
  ],
  char: "⛽",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const busstop = {
  keywords: [
    "transportation",
    "wait"
  ],
  char: "🚏",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const vertical_traffic_light = {
  keywords: [
    "transportation",
    "driving"
  ],
  char: "🚦",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const traffic_light = {
  keywords: [
    "transportation",
    "signal"
  ],
  char: "🚥",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const checkered_flag = {
  keywords: [
    "contest",
    "finishline",
    "race",
    "gokart"
  ],
  char: "🏁",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const ship = {
  keywords: [
    "transportation",
    "titanic",
    "deploy"
  ],
  char: "🚢",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const ferris_wheel = {
  keywords: [
    "photo",
    "carnival",
    "londoneye"
  ],
  char: "🎡",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const roller_coaster = {
  keywords: [
    "carnival",
    "playground",
    "photo",
    "fun"
  ],
  char: "🎢",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const carousel_horse = {
  keywords: [
    "photo",
    "carnival"
  ],
  char: "🎠",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const building_construction = {
  keywords: [
    "wip",
    "working",
    "progress"
  ],
  char: "🏗",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const foggy = {
  keywords: [
    "photo",
    "mountain"
  ],
  char: "🌁",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const tokyo_tower = {
  keywords: [
    "photo",
    "japanese"
  ],
  char: "🗼",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const factory = {
  keywords: [
    "building",
    "industry",
    "pollution",
    "smoke"
  ],
  char: "🏭",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const fountain = {
  keywords: [
    "photo",
    "summer",
    "water",
    "fresh"
  ],
  char: "⛲",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const rice_scene = {
  keywords: [
    "photo",
    "japan",
    "asia",
    "tsukimi"
  ],
  char: "🎑",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mountain = {
  keywords: [
    "photo",
    "nature",
    "environment"
  ],
  char: "⛰",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mountain_snow = {
  keywords: [
    "photo",
    "nature",
    "environment",
    "winter",
    "cold"
  ],
  char: "🏔",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mount_fuji = {
  keywords: [
    "photo",
    "mountain",
    "nature",
    "japanese"
  ],
  char: "🗻",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const volcano = {
  keywords: [
    "photo",
    "nature",
    "disaster"
  ],
  char: "🌋",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const japan = {
  keywords: [
    "nation",
    "country",
    "japanese",
    "asia"
  ],
  char: "🗾",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const camping = {
  keywords: [
    "photo",
    "outdoors",
    "tent"
  ],
  char: "🏕",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const tent = {
  keywords: [
    "photo",
    "camping",
    "outdoors"
  ],
  char: "⛺",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const national_park = {
  keywords: [
    "photo",
    "environment",
    "nature"
  ],
  char: "🏞",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const motorway = {
  keywords: [
    "road",
    "cupertino",
    "interstate",
    "highway"
  ],
  char: "🛣",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const railway_track = {
  keywords: [
    "train",
    "transportation"
  ],
  char: "🛤",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const sunrise = {
  keywords: [
    "morning",
    "view",
    "vacation",
    "photo"
  ],
  char: "🌅",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const sunrise_over_mountains = {
  keywords: [
    "view",
    "vacation",
    "photo"
  ],
  char: "🌄",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const desert = {
  keywords: [
    "photo",
    "warm",
    "saharah"
  ],
  char: "🏜",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const beach_umbrella = {
  keywords: [
    "weather",
    "summer",
    "sunny",
    "sand",
    "mojito"
  ],
  char: "🏖",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const desert_island = {
  keywords: [
    "photo",
    "tropical",
    "mojito"
  ],
  char: "🏝",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const city_sunrise = {
  keywords: [
    "photo",
    "good morning",
    "dawn"
  ],
  char: "🌇",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const city_sunset = {
  keywords: [
    "photo",
    "evening",
    "sky",
    "buildings"
  ],
  char: "🌆",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const cityscape = {
  keywords: [
    "photo",
    "night life",
    "urban"
  ],
  char: "🏙",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const night_with_stars = {
  keywords: [
    "evening",
    "city",
    "downtown"
  ],
  char: "🌃",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bridge_at_night = {
  keywords: [
    "photo",
    "sanfrancisco"
  ],
  char: "🌉",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const milky_way = {
  keywords: [
    "photo",
    "space",
    "stars"
  ],
  char: "🌌",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const stars = {
  keywords: [
    "night",
    "photo"
  ],
  char: "🌠",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const sparkler = {
  keywords: [
    "stars",
    "night",
    "shine"
  ],
  char: "🎇",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const fireworks = {
  keywords: [
    "photo",
    "festival",
    "carnival",
    "congratulations"
  ],
  char: "🎆",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const rainbow = {
  keywords: [
    "nature",
    "happy",
    "unicorn_face",
    "photo",
    "sky",
    "spring"
  ],
  char: "🌈",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const houses = {
  keywords: [
    "buildings",
    "photo"
  ],
  char: "🏘",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const european_castle = {
  keywords: [
    "building",
    "royalty",
    "history"
  ],
  char: "🏰",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const japanese_castle = {
  keywords: [
    "photo",
    "building"
  ],
  char: "🏯",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const stadium = {
  keywords: [
    "photo",
    "place",
    "sports",
    "concert",
    "venue"
  ],
  char: "🏟",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const statue_of_liberty = {
  keywords: [
    "american",
    "newyork"
  ],
  char: "🗽",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const house = {
  keywords: [
    "building",
    "home"
  ],
  char: "🏠",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const house_with_garden = {
  keywords: [
    "home",
    "plant",
    "nature"
  ],
  char: "🏡",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const derelict_house = {
  keywords: [
    "abandon",
    "evict",
    "broken",
    "building"
  ],
  char: "🏚",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const office = {
  keywords: [
    "building",
    "bureau",
    "work"
  ],
  char: "🏢",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const department_store = {
  keywords: [
    "building",
    "shopping",
    "mall"
  ],
  char: "🏬",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const post_office = {
  keywords: [
    "building",
    "envelope",
    "communication"
  ],
  char: "🏣",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const european_post_office = {
  keywords: [
    "building",
    "email"
  ],
  char: "🏤",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const hospital = {
  keywords: [
    "building",
    "health",
    "surgery",
    "doctor"
  ],
  char: "🏥",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const bank = {
  keywords: [
    "building",
    "money",
    "sales",
    "cash",
    "business",
    "enterprise"
  ],
  char: "🏦",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const hotel = {
  keywords: [
    "building",
    "accomodation",
    "checkin"
  ],
  char: "🏨",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const convenience_store = {
  keywords: [
    "building",
    "shopping",
    "groceries"
  ],
  char: "🏪",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const school = {
  keywords: [
    "building",
    "student",
    "education",
    "learn",
    "teach"
  ],
  char: "🏫",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const love_hotel = {
  keywords: [
    "like",
    "affection",
    "dating"
  ],
  char: "🏩",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const wedding = {
  keywords: [
    "love",
    "like",
    "affection",
    "couple",
    "marriage",
    "bride",
    "groom"
  ],
  char: "💒",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const classical_building = {
  keywords: [
    "art",
    "culture",
    "history"
  ],
  char: "🏛",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const church = {
  keywords: [
    "building",
    "religion",
    "christ"
  ],
  char: "⛪",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const mosque = {
  keywords: [
    "islam",
    "worship",
    "minaret"
  ],
  char: "🕌",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const synagogue = {
  keywords: [
    "judaism",
    "worship",
    "temple",
    "jewish"
  ],
  char: "🕍",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const kaaba = {
  keywords: [
    "mecca",
    "mosque",
    "islam"
  ],
  char: "🕋",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const shinto_shrine = {
  keywords: [
    "temple",
    "japan",
    "kyoto"
  ],
  char: "⛩",
  fitzpatrick_scale: false,
  category: "travel_and_places"
};
const watch = {
  keywords: [
    "time",
    "accessories"
  ],
  char: "⌚",
  fitzpatrick_scale: false,
  category: "objects"
};
const iphone = {
  keywords: [
    "technology",
    "apple",
    "gadgets",
    "dial"
  ],
  char: "📱",
  fitzpatrick_scale: false,
  category: "objects"
};
const calling = {
  keywords: [
    "iphone",
    "incoming"
  ],
  char: "📲",
  fitzpatrick_scale: false,
  category: "objects"
};
const computer = {
  keywords: [
    "technology",
    "laptop",
    "screen",
    "display",
    "monitor"
  ],
  char: "💻",
  fitzpatrick_scale: false,
  category: "objects"
};
const keyboard = {
  keywords: [
    "technology",
    "computer",
    "type",
    "input",
    "text"
  ],
  char: "⌨",
  fitzpatrick_scale: false,
  category: "objects"
};
const desktop_computer = {
  keywords: [
    "technology",
    "computing",
    "screen"
  ],
  char: "🖥",
  fitzpatrick_scale: false,
  category: "objects"
};
const printer = {
  keywords: [
    "paper",
    "ink"
  ],
  char: "🖨",
  fitzpatrick_scale: false,
  category: "objects"
};
const computer_mouse = {
  keywords: [
    "click"
  ],
  char: "🖱",
  fitzpatrick_scale: false,
  category: "objects"
};
const trackball = {
  keywords: [
    "technology",
    "trackpad"
  ],
  char: "🖲",
  fitzpatrick_scale: false,
  category: "objects"
};
const joystick = {
  keywords: [
    "game",
    "play"
  ],
  char: "🕹",
  fitzpatrick_scale: false,
  category: "objects"
};
const clamp = {
  keywords: [
    "tool"
  ],
  char: "🗜",
  fitzpatrick_scale: false,
  category: "objects"
};
const minidisc = {
  keywords: [
    "technology",
    "record",
    "data",
    "disk",
    "90s"
  ],
  char: "💽",
  fitzpatrick_scale: false,
  category: "objects"
};
const floppy_disk = {
  keywords: [
    "oldschool",
    "technology",
    "save",
    "90s",
    "80s"
  ],
  char: "💾",
  fitzpatrick_scale: false,
  category: "objects"
};
const cd = {
  keywords: [
    "technology",
    "dvd",
    "disk",
    "disc",
    "90s"
  ],
  char: "💿",
  fitzpatrick_scale: false,
  category: "objects"
};
const dvd = {
  keywords: [
    "cd",
    "disk",
    "disc"
  ],
  char: "📀",
  fitzpatrick_scale: false,
  category: "objects"
};
const vhs = {
  keywords: [
    "record",
    "video",
    "oldschool",
    "90s",
    "80s"
  ],
  char: "📼",
  fitzpatrick_scale: false,
  category: "objects"
};
const camera = {
  keywords: [
    "gadgets",
    "photography"
  ],
  char: "📷",
  fitzpatrick_scale: false,
  category: "objects"
};
const camera_flash = {
  keywords: [
    "photography",
    "gadgets"
  ],
  char: "📸",
  fitzpatrick_scale: false,
  category: "objects"
};
const video_camera = {
  keywords: [
    "film",
    "record"
  ],
  char: "📹",
  fitzpatrick_scale: false,
  category: "objects"
};
const movie_camera = {
  keywords: [
    "film",
    "record"
  ],
  char: "🎥",
  fitzpatrick_scale: false,
  category: "objects"
};
const film_projector = {
  keywords: [
    "video",
    "tape",
    "record",
    "movie"
  ],
  char: "📽",
  fitzpatrick_scale: false,
  category: "objects"
};
const film_strip = {
  keywords: [
    "movie"
  ],
  char: "🎞",
  fitzpatrick_scale: false,
  category: "objects"
};
const telephone_receiver = {
  keywords: [
    "technology",
    "communication",
    "dial"
  ],
  char: "📞",
  fitzpatrick_scale: false,
  category: "objects"
};
const phone = {
  keywords: [
    "technology",
    "communication",
    "dial",
    "telephone"
  ],
  char: "☎️",
  fitzpatrick_scale: false,
  category: "objects"
};
const pager = {
  keywords: [
    "bbcall",
    "oldschool",
    "90s"
  ],
  char: "📟",
  fitzpatrick_scale: false,
  category: "objects"
};
const fax = {
  keywords: [
    "communication",
    "technology"
  ],
  char: "📠",
  fitzpatrick_scale: false,
  category: "objects"
};
const tv = {
  keywords: [
    "technology",
    "program",
    "oldschool",
    "show",
    "television"
  ],
  char: "📺",
  fitzpatrick_scale: false,
  category: "objects"
};
const radio = {
  keywords: [
    "communication",
    "music",
    "podcast",
    "program"
  ],
  char: "📻",
  fitzpatrick_scale: false,
  category: "objects"
};
const studio_microphone = {
  keywords: [
    "sing",
    "recording",
    "artist",
    "talkshow"
  ],
  char: "🎙",
  fitzpatrick_scale: false,
  category: "objects"
};
const level_slider = {
  keywords: [
    "scale"
  ],
  char: "🎚",
  fitzpatrick_scale: false,
  category: "objects"
};
const control_knobs = {
  keywords: [
    "dial"
  ],
  char: "🎛",
  fitzpatrick_scale: false,
  category: "objects"
};
const compass = {
  keywords: [
    "magnetic",
    "navigation",
    "orienteering"
  ],
  char: "🧭",
  fitzpatrick_scale: false,
  category: "objects"
};
const stopwatch = {
  keywords: [
    "time",
    "deadline"
  ],
  char: "⏱",
  fitzpatrick_scale: false,
  category: "objects"
};
const timer_clock = {
  keywords: [
    "alarm"
  ],
  char: "⏲",
  fitzpatrick_scale: false,
  category: "objects"
};
const alarm_clock = {
  keywords: [
    "time",
    "wake"
  ],
  char: "⏰",
  fitzpatrick_scale: false,
  category: "objects"
};
const mantelpiece_clock = {
  keywords: [
    "time"
  ],
  char: "🕰",
  fitzpatrick_scale: false,
  category: "objects"
};
const hourglass_flowing_sand = {
  keywords: [
    "oldschool",
    "time",
    "countdown"
  ],
  char: "⏳",
  fitzpatrick_scale: false,
  category: "objects"
};
const hourglass = {
  keywords: [
    "time",
    "clock",
    "oldschool",
    "limit",
    "exam",
    "quiz",
    "test"
  ],
  char: "⌛",
  fitzpatrick_scale: false,
  category: "objects"
};
const satellite = {
  keywords: [
    "communication",
    "future",
    "radio",
    "space"
  ],
  char: "📡",
  fitzpatrick_scale: false,
  category: "objects"
};
const battery = {
  keywords: [
    "power",
    "energy",
    "sustain"
  ],
  char: "🔋",
  fitzpatrick_scale: false,
  category: "objects"
};
const electric_plug = {
  keywords: [
    "charger",
    "power"
  ],
  char: "🔌",
  fitzpatrick_scale: false,
  category: "objects"
};
const bulb = {
  keywords: [
    "light",
    "electricity",
    "idea"
  ],
  char: "💡",
  fitzpatrick_scale: false,
  category: "objects"
};
const flashlight = {
  keywords: [
    "dark",
    "camping",
    "sight",
    "night"
  ],
  char: "🔦",
  fitzpatrick_scale: false,
  category: "objects"
};
const candle = {
  keywords: [
    "fire",
    "wax"
  ],
  char: "🕯",
  fitzpatrick_scale: false,
  category: "objects"
};
const fire_extinguisher = {
  keywords: [
    "quench"
  ],
  char: "🧯",
  fitzpatrick_scale: false,
  category: "objects"
};
const wastebasket = {
  keywords: [
    "bin",
    "trash",
    "rubbish",
    "garbage",
    "toss"
  ],
  char: "🗑",
  fitzpatrick_scale: false,
  category: "objects"
};
const oil_drum = {
  keywords: [
    "barrell"
  ],
  char: "🛢",
  fitzpatrick_scale: false,
  category: "objects"
};
const money_with_wings = {
  keywords: [
    "dollar",
    "bills",
    "payment",
    "sale"
  ],
  char: "💸",
  fitzpatrick_scale: false,
  category: "objects"
};
const dollar = {
  keywords: [
    "money",
    "sales",
    "bill",
    "currency"
  ],
  char: "💵",
  fitzpatrick_scale: false,
  category: "objects"
};
const yen = {
  keywords: [
    "money",
    "sales",
    "japanese",
    "dollar",
    "currency"
  ],
  char: "💴",
  fitzpatrick_scale: false,
  category: "objects"
};
const euro = {
  keywords: [
    "money",
    "sales",
    "dollar",
    "currency"
  ],
  char: "💶",
  fitzpatrick_scale: false,
  category: "objects"
};
const pound = {
  keywords: [
    "british",
    "sterling",
    "money",
    "sales",
    "bills",
    "uk",
    "england",
    "currency"
  ],
  char: "💷",
  fitzpatrick_scale: false,
  category: "objects"
};
const moneybag = {
  keywords: [
    "dollar",
    "payment",
    "coins",
    "sale"
  ],
  char: "💰",
  fitzpatrick_scale: false,
  category: "objects"
};
const credit_card = {
  keywords: [
    "money",
    "sales",
    "dollar",
    "bill",
    "payment",
    "shopping"
  ],
  char: "💳",
  fitzpatrick_scale: false,
  category: "objects"
};
const gem = {
  keywords: [
    "blue",
    "ruby",
    "diamond",
    "jewelry"
  ],
  char: "💎",
  fitzpatrick_scale: false,
  category: "objects"
};
const balance_scale = {
  keywords: [
    "law",
    "fairness",
    "weight"
  ],
  char: "⚖",
  fitzpatrick_scale: false,
  category: "objects"
};
const toolbox = {
  keywords: [
    "tools",
    "diy",
    "fix",
    "maintainer",
    "mechanic"
  ],
  char: "🧰",
  fitzpatrick_scale: false,
  category: "objects"
};
const wrench = {
  keywords: [
    "tools",
    "diy",
    "ikea",
    "fix",
    "maintainer"
  ],
  char: "🔧",
  fitzpatrick_scale: false,
  category: "objects"
};
const hammer = {
  keywords: [
    "tools",
    "build",
    "create"
  ],
  char: "🔨",
  fitzpatrick_scale: false,
  category: "objects"
};
const hammer_and_pick = {
  keywords: [
    "tools",
    "build",
    "create"
  ],
  char: "⚒",
  fitzpatrick_scale: false,
  category: "objects"
};
const hammer_and_wrench = {
  keywords: [
    "tools",
    "build",
    "create"
  ],
  char: "🛠",
  fitzpatrick_scale: false,
  category: "objects"
};
const pick = {
  keywords: [
    "tools",
    "dig"
  ],
  char: "⛏",
  fitzpatrick_scale: false,
  category: "objects"
};
const nut_and_bolt = {
  keywords: [
    "handy",
    "tools",
    "fix"
  ],
  char: "🔩",
  fitzpatrick_scale: false,
  category: "objects"
};
const gear = {
  keywords: [
    "cog"
  ],
  char: "⚙",
  fitzpatrick_scale: false,
  category: "objects"
};
const brick = {
  keywords: [
    "bricks"
  ],
  char: "🧱",
  fitzpatrick_scale: false,
  category: "objects"
};
const chains = {
  keywords: [
    "lock",
    "arrest"
  ],
  char: "⛓",
  fitzpatrick_scale: false,
  category: "objects"
};
const magnet = {
  keywords: [
    "attraction",
    "magnetic"
  ],
  char: "🧲",
  fitzpatrick_scale: false,
  category: "objects"
};
const gun = {
  keywords: [
    "violence",
    "weapon",
    "pistol",
    "revolver"
  ],
  char: "🔫",
  fitzpatrick_scale: false,
  category: "objects"
};
const bomb = {
  keywords: [
    "boom",
    "explode",
    "explosion",
    "terrorism"
  ],
  char: "💣",
  fitzpatrick_scale: false,
  category: "objects"
};
const firecracker = {
  keywords: [
    "dynamite",
    "boom",
    "explode",
    "explosion",
    "explosive"
  ],
  char: "🧨",
  fitzpatrick_scale: false,
  category: "objects"
};
const hocho = {
  keywords: [
    "knife",
    "blade",
    "cutlery",
    "kitchen",
    "weapon"
  ],
  char: "🔪",
  fitzpatrick_scale: false,
  category: "objects"
};
const dagger = {
  keywords: [
    "weapon"
  ],
  char: "🗡",
  fitzpatrick_scale: false,
  category: "objects"
};
const crossed_swords = {
  keywords: [
    "weapon"
  ],
  char: "⚔",
  fitzpatrick_scale: false,
  category: "objects"
};
const shield = {
  keywords: [
    "protection",
    "security"
  ],
  char: "🛡",
  fitzpatrick_scale: false,
  category: "objects"
};
const smoking = {
  keywords: [
    "kills",
    "tobacco",
    "cigarette",
    "joint",
    "smoke"
  ],
  char: "🚬",
  fitzpatrick_scale: false,
  category: "objects"
};
const skull_and_crossbones = {
  keywords: [
    "poison",
    "danger",
    "deadly",
    "scary",
    "death",
    "pirate",
    "evil"
  ],
  char: "☠",
  fitzpatrick_scale: false,
  category: "objects"
};
const coffin = {
  keywords: [
    "vampire",
    "dead",
    "die",
    "death",
    "rip",
    "graveyard",
    "cemetery",
    "casket",
    "funeral",
    "box"
  ],
  char: "⚰",
  fitzpatrick_scale: false,
  category: "objects"
};
const funeral_urn = {
  keywords: [
    "dead",
    "die",
    "death",
    "rip",
    "ashes"
  ],
  char: "⚱",
  fitzpatrick_scale: false,
  category: "objects"
};
const amphora = {
  keywords: [
    "vase",
    "jar"
  ],
  char: "🏺",
  fitzpatrick_scale: false,
  category: "objects"
};
const crystal_ball = {
  keywords: [
    "disco",
    "party",
    "magic",
    "circus",
    "fortune_teller"
  ],
  char: "🔮",
  fitzpatrick_scale: false,
  category: "objects"
};
const prayer_beads = {
  keywords: [
    "dhikr",
    "religious"
  ],
  char: "📿",
  fitzpatrick_scale: false,
  category: "objects"
};
const nazar_amulet = {
  keywords: [
    "bead",
    "charm"
  ],
  char: "🧿",
  fitzpatrick_scale: false,
  category: "objects"
};
const barber = {
  keywords: [
    "hair",
    "salon",
    "style"
  ],
  char: "💈",
  fitzpatrick_scale: false,
  category: "objects"
};
const alembic = {
  keywords: [
    "distilling",
    "science",
    "experiment",
    "chemistry"
  ],
  char: "⚗",
  fitzpatrick_scale: false,
  category: "objects"
};
const telescope = {
  keywords: [
    "stars",
    "space",
    "zoom",
    "science",
    "astronomy"
  ],
  char: "🔭",
  fitzpatrick_scale: false,
  category: "objects"
};
const microscope = {
  keywords: [
    "laboratory",
    "experiment",
    "zoomin",
    "science",
    "study"
  ],
  char: "🔬",
  fitzpatrick_scale: false,
  category: "objects"
};
const hole = {
  keywords: [
    "embarrassing"
  ],
  char: "🕳",
  fitzpatrick_scale: false,
  category: "objects"
};
const pill = {
  keywords: [
    "health",
    "medicine",
    "doctor",
    "pharmacy",
    "drug"
  ],
  char: "💊",
  fitzpatrick_scale: false,
  category: "objects"
};
const syringe = {
  keywords: [
    "health",
    "hospital",
    "drugs",
    "blood",
    "medicine",
    "needle",
    "doctor",
    "nurse"
  ],
  char: "💉",
  fitzpatrick_scale: false,
  category: "objects"
};
const dna = {
  keywords: [
    "biologist",
    "genetics",
    "life"
  ],
  char: "🧬",
  fitzpatrick_scale: false,
  category: "objects"
};
const microbe = {
  keywords: [
    "amoeba",
    "bacteria",
    "germs"
  ],
  char: "🦠",
  fitzpatrick_scale: false,
  category: "objects"
};
const petri_dish = {
  keywords: [
    "bacteria",
    "biology",
    "culture",
    "lab"
  ],
  char: "🧫",
  fitzpatrick_scale: false,
  category: "objects"
};
const test_tube = {
  keywords: [
    "chemistry",
    "experiment",
    "lab",
    "science"
  ],
  char: "🧪",
  fitzpatrick_scale: false,
  category: "objects"
};
const thermometer = {
  keywords: [
    "weather",
    "temperature",
    "hot",
    "cold"
  ],
  char: "🌡",
  fitzpatrick_scale: false,
  category: "objects"
};
const broom = {
  keywords: [
    "cleaning",
    "sweeping",
    "witch"
  ],
  char: "🧹",
  fitzpatrick_scale: false,
  category: "objects"
};
const basket = {
  keywords: [
    "laundry"
  ],
  char: "🧺",
  fitzpatrick_scale: false,
  category: "objects"
};
const toilet_paper = {
  keywords: [
    "roll"
  ],
  char: "🧻",
  fitzpatrick_scale: false,
  category: "objects"
};
const label = {
  keywords: [
    "sale",
    "tag"
  ],
  char: "🏷",
  fitzpatrick_scale: false,
  category: "objects"
};
const bookmark = {
  keywords: [
    "favorite",
    "label",
    "save"
  ],
  char: "🔖",
  fitzpatrick_scale: false,
  category: "objects"
};
const toilet = {
  keywords: [
    "restroom",
    "wc",
    "washroom",
    "bathroom",
    "potty"
  ],
  char: "🚽",
  fitzpatrick_scale: false,
  category: "objects"
};
const shower = {
  keywords: [
    "clean",
    "water",
    "bathroom"
  ],
  char: "🚿",
  fitzpatrick_scale: false,
  category: "objects"
};
const bathtub = {
  keywords: [
    "clean",
    "shower",
    "bathroom"
  ],
  char: "🛁",
  fitzpatrick_scale: false,
  category: "objects"
};
const soap = {
  keywords: [
    "bar",
    "bathing",
    "cleaning",
    "lather"
  ],
  char: "🧼",
  fitzpatrick_scale: false,
  category: "objects"
};
const sponge = {
  keywords: [
    "absorbing",
    "cleaning",
    "porous"
  ],
  char: "🧽",
  fitzpatrick_scale: false,
  category: "objects"
};
const lotion_bottle = {
  keywords: [
    "moisturizer",
    "sunscreen"
  ],
  char: "🧴",
  fitzpatrick_scale: false,
  category: "objects"
};
const key = {
  keywords: [
    "lock",
    "door",
    "password"
  ],
  char: "🔑",
  fitzpatrick_scale: false,
  category: "objects"
};
const old_key = {
  keywords: [
    "lock",
    "door",
    "password"
  ],
  char: "🗝",
  fitzpatrick_scale: false,
  category: "objects"
};
const couch_and_lamp = {
  keywords: [
    "read",
    "chill"
  ],
  char: "🛋",
  fitzpatrick_scale: false,
  category: "objects"
};
const sleeping_bed = {
  keywords: [
    "bed",
    "rest"
  ],
  char: "🛌",
  fitzpatrick_scale: true,
  category: "objects"
};
const bed = {
  keywords: [
    "sleep",
    "rest"
  ],
  char: "🛏",
  fitzpatrick_scale: false,
  category: "objects"
};
const door = {
  keywords: [
    "house",
    "entry",
    "exit"
  ],
  char: "🚪",
  fitzpatrick_scale: false,
  category: "objects"
};
const bellhop_bell = {
  keywords: [
    "service"
  ],
  char: "🛎",
  fitzpatrick_scale: false,
  category: "objects"
};
const teddy_bear = {
  keywords: [
    "plush",
    "stuffed"
  ],
  char: "🧸",
  fitzpatrick_scale: false,
  category: "objects"
};
const framed_picture = {
  keywords: [
    "photography"
  ],
  char: "🖼",
  fitzpatrick_scale: false,
  category: "objects"
};
const world_map = {
  keywords: [
    "location",
    "direction"
  ],
  char: "🗺",
  fitzpatrick_scale: false,
  category: "objects"
};
const parasol_on_ground = {
  keywords: [
    "weather",
    "summer"
  ],
  char: "⛱",
  fitzpatrick_scale: false,
  category: "objects"
};
const moyai = {
  keywords: [
    "rock",
    "easter island",
    "moai"
  ],
  char: "🗿",
  fitzpatrick_scale: false,
  category: "objects"
};
const shopping = {
  keywords: [
    "mall",
    "buy",
    "purchase"
  ],
  char: "🛍",
  fitzpatrick_scale: false,
  category: "objects"
};
const shopping_cart = {
  keywords: [
    "trolley"
  ],
  char: "🛒",
  fitzpatrick_scale: false,
  category: "objects"
};
const balloon = {
  keywords: [
    "party",
    "celebration",
    "birthday",
    "circus"
  ],
  char: "🎈",
  fitzpatrick_scale: false,
  category: "objects"
};
const flags = {
  keywords: [
    "fish",
    "japanese",
    "koinobori",
    "carp",
    "banner"
  ],
  char: "🎏",
  fitzpatrick_scale: false,
  category: "objects"
};
const ribbon = {
  keywords: [
    "decoration",
    "pink",
    "girl",
    "bowtie"
  ],
  char: "🎀",
  fitzpatrick_scale: false,
  category: "objects"
};
const gift = {
  keywords: [
    "present",
    "birthday",
    "christmas",
    "xmas"
  ],
  char: "🎁",
  fitzpatrick_scale: false,
  category: "objects"
};
const confetti_ball = {
  keywords: [
    "festival",
    "party",
    "birthday",
    "circus"
  ],
  char: "🎊",
  fitzpatrick_scale: false,
  category: "objects"
};
const tada = {
  keywords: [
    "party",
    "congratulations",
    "birthday",
    "magic",
    "circus",
    "celebration"
  ],
  char: "🎉",
  fitzpatrick_scale: false,
  category: "objects"
};
const dolls = {
  keywords: [
    "japanese",
    "toy",
    "kimono"
  ],
  char: "🎎",
  fitzpatrick_scale: false,
  category: "objects"
};
const wind_chime = {
  keywords: [
    "nature",
    "ding",
    "spring",
    "bell"
  ],
  char: "🎐",
  fitzpatrick_scale: false,
  category: "objects"
};
const crossed_flags = {
  keywords: [
    "japanese",
    "nation",
    "country",
    "border"
  ],
  char: "🎌",
  fitzpatrick_scale: false,
  category: "objects"
};
const izakaya_lantern = {
  keywords: [
    "light",
    "paper",
    "halloween",
    "spooky"
  ],
  char: "🏮",
  fitzpatrick_scale: false,
  category: "objects"
};
const red_envelope = {
  keywords: [
    "gift"
  ],
  char: "🧧",
  fitzpatrick_scale: false,
  category: "objects"
};
const email = {
  keywords: [
    "letter",
    "postal",
    "inbox",
    "communication"
  ],
  char: "✉️",
  fitzpatrick_scale: false,
  category: "objects"
};
const envelope_with_arrow = {
  keywords: [
    "email",
    "communication"
  ],
  char: "📩",
  fitzpatrick_scale: false,
  category: "objects"
};
const incoming_envelope = {
  keywords: [
    "email",
    "inbox"
  ],
  char: "📨",
  fitzpatrick_scale: false,
  category: "objects"
};
const love_letter = {
  keywords: [
    "email",
    "like",
    "affection",
    "envelope",
    "valentines"
  ],
  char: "💌",
  fitzpatrick_scale: false,
  category: "objects"
};
const postbox = {
  keywords: [
    "email",
    "letter",
    "envelope"
  ],
  char: "📮",
  fitzpatrick_scale: false,
  category: "objects"
};
const mailbox_closed = {
  keywords: [
    "email",
    "communication",
    "inbox"
  ],
  char: "📪",
  fitzpatrick_scale: false,
  category: "objects"
};
const mailbox = {
  keywords: [
    "email",
    "inbox",
    "communication"
  ],
  char: "📫",
  fitzpatrick_scale: false,
  category: "objects"
};
const mailbox_with_mail = {
  keywords: [
    "email",
    "inbox",
    "communication"
  ],
  char: "📬",
  fitzpatrick_scale: false,
  category: "objects"
};
const mailbox_with_no_mail = {
  keywords: [
    "email",
    "inbox"
  ],
  char: "📭",
  fitzpatrick_scale: false,
  category: "objects"
};
const postal_horn = {
  keywords: [
    "instrument",
    "music"
  ],
  char: "📯",
  fitzpatrick_scale: false,
  category: "objects"
};
const inbox_tray = {
  keywords: [
    "email",
    "documents"
  ],
  char: "📥",
  fitzpatrick_scale: false,
  category: "objects"
};
const outbox_tray = {
  keywords: [
    "inbox",
    "email"
  ],
  char: "📤",
  fitzpatrick_scale: false,
  category: "objects"
};
const scroll = {
  keywords: [
    "documents",
    "ancient",
    "history",
    "paper"
  ],
  char: "📜",
  fitzpatrick_scale: false,
  category: "objects"
};
const page_with_curl = {
  keywords: [
    "documents",
    "office",
    "paper"
  ],
  char: "📃",
  fitzpatrick_scale: false,
  category: "objects"
};
const bookmark_tabs = {
  keywords: [
    "favorite",
    "save",
    "order",
    "tidy"
  ],
  char: "📑",
  fitzpatrick_scale: false,
  category: "objects"
};
const receipt = {
  keywords: [
    "accounting",
    "expenses"
  ],
  char: "🧾",
  fitzpatrick_scale: false,
  category: "objects"
};
const bar_chart = {
  keywords: [
    "graph",
    "presentation",
    "stats"
  ],
  char: "📊",
  fitzpatrick_scale: false,
  category: "objects"
};
const chart_with_upwards_trend = {
  keywords: [
    "graph",
    "presentation",
    "stats",
    "recovery",
    "business",
    "economics",
    "money",
    "sales",
    "good",
    "success"
  ],
  char: "📈",
  fitzpatrick_scale: false,
  category: "objects"
};
const chart_with_downwards_trend = {
  keywords: [
    "graph",
    "presentation",
    "stats",
    "recession",
    "business",
    "economics",
    "money",
    "sales",
    "bad",
    "failure"
  ],
  char: "📉",
  fitzpatrick_scale: false,
  category: "objects"
};
const page_facing_up = {
  keywords: [
    "documents",
    "office",
    "paper",
    "information"
  ],
  char: "📄",
  fitzpatrick_scale: false,
  category: "objects"
};
const date = {
  keywords: [
    "calendar",
    "schedule"
  ],
  char: "📅",
  fitzpatrick_scale: false,
  category: "objects"
};
const calendar = {
  keywords: [
    "schedule",
    "date",
    "planning"
  ],
  char: "📆",
  fitzpatrick_scale: false,
  category: "objects"
};
const spiral_calendar = {
  keywords: [
    "date",
    "schedule",
    "planning"
  ],
  char: "🗓",
  fitzpatrick_scale: false,
  category: "objects"
};
const card_index = {
  keywords: [
    "business",
    "stationery"
  ],
  char: "📇",
  fitzpatrick_scale: false,
  category: "objects"
};
const card_file_box = {
  keywords: [
    "business",
    "stationery"
  ],
  char: "🗃",
  fitzpatrick_scale: false,
  category: "objects"
};
const ballot_box = {
  keywords: [
    "election",
    "vote"
  ],
  char: "🗳",
  fitzpatrick_scale: false,
  category: "objects"
};
const file_cabinet = {
  keywords: [
    "filing",
    "organizing"
  ],
  char: "🗄",
  fitzpatrick_scale: false,
  category: "objects"
};
const clipboard = {
  keywords: [
    "stationery",
    "documents"
  ],
  char: "📋",
  fitzpatrick_scale: false,
  category: "objects"
};
const spiral_notepad = {
  keywords: [
    "memo",
    "stationery"
  ],
  char: "🗒",
  fitzpatrick_scale: false,
  category: "objects"
};
const file_folder = {
  keywords: [
    "documents",
    "business",
    "office"
  ],
  char: "📁",
  fitzpatrick_scale: false,
  category: "objects"
};
const open_file_folder = {
  keywords: [
    "documents",
    "load"
  ],
  char: "📂",
  fitzpatrick_scale: false,
  category: "objects"
};
const card_index_dividers = {
  keywords: [
    "organizing",
    "business",
    "stationery"
  ],
  char: "🗂",
  fitzpatrick_scale: false,
  category: "objects"
};
const newspaper_roll = {
  keywords: [
    "press",
    "headline"
  ],
  char: "🗞",
  fitzpatrick_scale: false,
  category: "objects"
};
const newspaper = {
  keywords: [
    "press",
    "headline"
  ],
  char: "📰",
  fitzpatrick_scale: false,
  category: "objects"
};
const notebook = {
  keywords: [
    "stationery",
    "record",
    "notes",
    "paper",
    "study"
  ],
  char: "📓",
  fitzpatrick_scale: false,
  category: "objects"
};
const closed_book = {
  keywords: [
    "read",
    "library",
    "knowledge",
    "textbook",
    "learn"
  ],
  char: "📕",
  fitzpatrick_scale: false,
  category: "objects"
};
const green_book = {
  keywords: [
    "read",
    "library",
    "knowledge",
    "study"
  ],
  char: "📗",
  fitzpatrick_scale: false,
  category: "objects"
};
const blue_book = {
  keywords: [
    "read",
    "library",
    "knowledge",
    "learn",
    "study"
  ],
  char: "📘",
  fitzpatrick_scale: false,
  category: "objects"
};
const orange_book = {
  keywords: [
    "read",
    "library",
    "knowledge",
    "textbook",
    "study"
  ],
  char: "📙",
  fitzpatrick_scale: false,
  category: "objects"
};
const notebook_with_decorative_cover = {
  keywords: [
    "classroom",
    "notes",
    "record",
    "paper",
    "study"
  ],
  char: "📔",
  fitzpatrick_scale: false,
  category: "objects"
};
const ledger = {
  keywords: [
    "notes",
    "paper"
  ],
  char: "📒",
  fitzpatrick_scale: false,
  category: "objects"
};
const books = {
  keywords: [
    "literature",
    "library",
    "study"
  ],
  char: "📚",
  fitzpatrick_scale: false,
  category: "objects"
};
const open_book = {
  keywords: [
    "book",
    "read",
    "library",
    "knowledge",
    "literature",
    "learn",
    "study"
  ],
  char: "📖",
  fitzpatrick_scale: false,
  category: "objects"
};
const safety_pin = {
  keywords: [
    "diaper"
  ],
  char: "🧷",
  fitzpatrick_scale: false,
  category: "objects"
};
const link = {
  keywords: [
    "rings",
    "url"
  ],
  char: "🔗",
  fitzpatrick_scale: false,
  category: "objects"
};
const paperclip = {
  keywords: [
    "documents",
    "stationery"
  ],
  char: "📎",
  fitzpatrick_scale: false,
  category: "objects"
};
const paperclips = {
  keywords: [
    "documents",
    "stationery"
  ],
  char: "🖇",
  fitzpatrick_scale: false,
  category: "objects"
};
const scissors = {
  keywords: [
    "stationery",
    "cut"
  ],
  char: "✂️",
  fitzpatrick_scale: false,
  category: "objects"
};
const triangular_ruler = {
  keywords: [
    "stationery",
    "math",
    "architect",
    "sketch"
  ],
  char: "📐",
  fitzpatrick_scale: false,
  category: "objects"
};
const straight_ruler = {
  keywords: [
    "stationery",
    "calculate",
    "length",
    "math",
    "school",
    "drawing",
    "architect",
    "sketch"
  ],
  char: "📏",
  fitzpatrick_scale: false,
  category: "objects"
};
const abacus = {
  keywords: [
    "calculation"
  ],
  char: "🧮",
  fitzpatrick_scale: false,
  category: "objects"
};
const pushpin = {
  keywords: [
    "stationery",
    "mark",
    "here"
  ],
  char: "📌",
  fitzpatrick_scale: false,
  category: "objects"
};
const round_pushpin = {
  keywords: [
    "stationery",
    "location",
    "map",
    "here"
  ],
  char: "📍",
  fitzpatrick_scale: false,
  category: "objects"
};
const triangular_flag_on_post = {
  keywords: [
    "mark",
    "milestone",
    "place"
  ],
  char: "🚩",
  fitzpatrick_scale: false,
  category: "objects"
};
const white_flag = {
  keywords: [
    "losing",
    "loser",
    "lost",
    "surrender",
    "give up",
    "fail"
  ],
  char: "🏳",
  fitzpatrick_scale: false,
  category: "objects"
};
const black_flag = {
  keywords: [
    "pirate"
  ],
  char: "🏴",
  fitzpatrick_scale: false,
  category: "objects"
};
const rainbow_flag = {
  keywords: [
    "flag",
    "rainbow",
    "pride",
    "gay",
    "lgbt",
    "glbt",
    "queer",
    "homosexual",
    "lesbian",
    "bisexual",
    "transgender"
  ],
  char: "🏳️‍🌈",
  fitzpatrick_scale: false,
  category: "objects"
};
const closed_lock_with_key = {
  keywords: [
    "security",
    "privacy"
  ],
  char: "🔐",
  fitzpatrick_scale: false,
  category: "objects"
};
const lock = {
  keywords: [
    "security",
    "password",
    "padlock"
  ],
  char: "🔒",
  fitzpatrick_scale: false,
  category: "objects"
};
const unlock = {
  keywords: [
    "privacy",
    "security"
  ],
  char: "🔓",
  fitzpatrick_scale: false,
  category: "objects"
};
const lock_with_ink_pen = {
  keywords: [
    "security",
    "secret"
  ],
  char: "🔏",
  fitzpatrick_scale: false,
  category: "objects"
};
const pen = {
  keywords: [
    "stationery",
    "writing",
    "write"
  ],
  char: "🖊",
  fitzpatrick_scale: false,
  category: "objects"
};
const fountain_pen = {
  keywords: [
    "stationery",
    "writing",
    "write"
  ],
  char: "🖋",
  fitzpatrick_scale: false,
  category: "objects"
};
const black_nib = {
  keywords: [
    "pen",
    "stationery",
    "writing",
    "write"
  ],
  char: "✒️",
  fitzpatrick_scale: false,
  category: "objects"
};
const memo = {
  keywords: [
    "write",
    "documents",
    "stationery",
    "pencil",
    "paper",
    "writing",
    "legal",
    "exam",
    "quiz",
    "test",
    "study",
    "compose"
  ],
  char: "📝",
  fitzpatrick_scale: false,
  category: "objects"
};
const pencil2 = {
  keywords: [
    "stationery",
    "write",
    "paper",
    "writing",
    "school",
    "study"
  ],
  char: "✏️",
  fitzpatrick_scale: false,
  category: "objects"
};
const crayon = {
  keywords: [
    "drawing",
    "creativity"
  ],
  char: "🖍",
  fitzpatrick_scale: false,
  category: "objects"
};
const paintbrush = {
  keywords: [
    "drawing",
    "creativity",
    "art"
  ],
  char: "🖌",
  fitzpatrick_scale: false,
  category: "objects"
};
const mag = {
  keywords: [
    "search",
    "zoom",
    "find",
    "detective"
  ],
  char: "🔍",
  fitzpatrick_scale: false,
  category: "objects"
};
const mag_right = {
  keywords: [
    "search",
    "zoom",
    "find",
    "detective"
  ],
  char: "🔎",
  fitzpatrick_scale: false,
  category: "objects"
};
const heart = {
  keywords: [
    "love",
    "like",
    "valentines"
  ],
  char: "❤️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const orange_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "🧡",
  fitzpatrick_scale: false,
  category: "symbols"
};
const yellow_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const green_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💚",
  fitzpatrick_scale: false,
  category: "symbols"
};
const blue_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💙",
  fitzpatrick_scale: false,
  category: "symbols"
};
const purple_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💜",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_heart = {
  keywords: [
    "evil"
  ],
  char: "🖤",
  fitzpatrick_scale: false,
  category: "symbols"
};
const broken_heart = {
  keywords: [
    "sad",
    "sorry",
    "break",
    "heart",
    "heartbreak"
  ],
  char: "💔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_heart_exclamation = {
  keywords: [
    "decoration",
    "love"
  ],
  char: "❣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const two_hearts = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines",
    "heart"
  ],
  char: "💕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const revolving_hearts = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💞",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heartbeat = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines",
    "pink",
    "heart"
  ],
  char: "💓",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heartpulse = {
  keywords: [
    "like",
    "love",
    "affection",
    "valentines",
    "pink"
  ],
  char: "💗",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sparkling_heart = {
  keywords: [
    "love",
    "like",
    "affection",
    "valentines"
  ],
  char: "💖",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cupid = {
  keywords: [
    "love",
    "like",
    "heart",
    "affection",
    "valentines"
  ],
  char: "💘",
  fitzpatrick_scale: false,
  category: "symbols"
};
const gift_heart = {
  keywords: [
    "love",
    "valentines"
  ],
  char: "💝",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heart_decoration = {
  keywords: [
    "purple-square",
    "love",
    "like"
  ],
  char: "💟",
  fitzpatrick_scale: false,
  category: "symbols"
};
const peace_symbol = {
  keywords: [
    "hippie"
  ],
  char: "☮",
  fitzpatrick_scale: false,
  category: "symbols"
};
const latin_cross = {
  keywords: [
    "christianity"
  ],
  char: "✝",
  fitzpatrick_scale: false,
  category: "symbols"
};
const star_and_crescent = {
  keywords: [
    "islam"
  ],
  char: "☪",
  fitzpatrick_scale: false,
  category: "symbols"
};
const om = {
  keywords: [
    "hinduism",
    "buddhism",
    "sikhism",
    "jainism"
  ],
  char: "🕉",
  fitzpatrick_scale: false,
  category: "symbols"
};
const wheel_of_dharma = {
  keywords: [
    "hinduism",
    "buddhism",
    "sikhism",
    "jainism"
  ],
  char: "☸",
  fitzpatrick_scale: false,
  category: "symbols"
};
const star_of_david = {
  keywords: [
    "judaism"
  ],
  char: "✡",
  fitzpatrick_scale: false,
  category: "symbols"
};
const six_pointed_star = {
  keywords: [
    "purple-square",
    "religion",
    "jewish",
    "hexagram"
  ],
  char: "🔯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const menorah = {
  keywords: [
    "hanukkah",
    "candles",
    "jewish"
  ],
  char: "🕎",
  fitzpatrick_scale: false,
  category: "symbols"
};
const yin_yang = {
  keywords: [
    "balance"
  ],
  char: "☯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const orthodox_cross = {
  keywords: [
    "suppedaneum",
    "religion"
  ],
  char: "☦",
  fitzpatrick_scale: false,
  category: "symbols"
};
const place_of_worship = {
  keywords: [
    "religion",
    "church",
    "temple",
    "prayer"
  ],
  char: "🛐",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ophiuchus = {
  keywords: [
    "sign",
    "purple-square",
    "constellation",
    "astrology"
  ],
  char: "⛎",
  fitzpatrick_scale: false,
  category: "symbols"
};
const aries = {
  keywords: [
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  char: "♈",
  fitzpatrick_scale: false,
  category: "symbols"
};
const taurus = {
  keywords: [
    "purple-square",
    "sign",
    "zodiac",
    "astrology"
  ],
  char: "♉",
  fitzpatrick_scale: false,
  category: "symbols"
};
const gemini = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  char: "♊",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cancer = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  char: "♋",
  fitzpatrick_scale: false,
  category: "symbols"
};
const leo = {
  keywords: [
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  char: "♌",
  fitzpatrick_scale: false,
  category: "symbols"
};
const virgo = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  char: "♍",
  fitzpatrick_scale: false,
  category: "symbols"
};
const libra = {
  keywords: [
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  char: "♎",
  fitzpatrick_scale: false,
  category: "symbols"
};
const scorpius = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology",
    "scorpio"
  ],
  char: "♏",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sagittarius = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  char: "♐",
  fitzpatrick_scale: false,
  category: "symbols"
};
const capricorn = {
  keywords: [
    "sign",
    "zodiac",
    "purple-square",
    "astrology"
  ],
  char: "♑",
  fitzpatrick_scale: false,
  category: "symbols"
};
const aquarius = {
  keywords: [
    "sign",
    "purple-square",
    "zodiac",
    "astrology"
  ],
  char: "♒",
  fitzpatrick_scale: false,
  category: "symbols"
};
const pisces = {
  keywords: [
    "purple-square",
    "sign",
    "zodiac",
    "astrology"
  ],
  char: "♓",
  fitzpatrick_scale: false,
  category: "symbols"
};
const id = {
  keywords: [
    "purple-square",
    "words"
  ],
  char: "🆔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const atom_symbol = {
  keywords: [
    "science",
    "physics",
    "chemistry"
  ],
  char: "⚛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u7a7a = {
  keywords: [
    "kanji",
    "japanese",
    "chinese",
    "empty",
    "sky",
    "blue-square"
  ],
  char: "🈳",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u5272 = {
  keywords: [
    "cut",
    "divide",
    "chinese",
    "kanji",
    "pink-square"
  ],
  char: "🈹",
  fitzpatrick_scale: false,
  category: "symbols"
};
const radioactive = {
  keywords: [
    "nuclear",
    "danger"
  ],
  char: "☢",
  fitzpatrick_scale: false,
  category: "symbols"
};
const biohazard = {
  keywords: [
    "danger"
  ],
  char: "☣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const mobile_phone_off = {
  keywords: [
    "mute",
    "orange-square",
    "silence",
    "quiet"
  ],
  char: "📴",
  fitzpatrick_scale: false,
  category: "symbols"
};
const vibration_mode = {
  keywords: [
    "orange-square",
    "phone"
  ],
  char: "📳",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u6709 = {
  keywords: [
    "orange-square",
    "chinese",
    "have",
    "kanji"
  ],
  char: "🈶",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u7121 = {
  keywords: [
    "nothing",
    "chinese",
    "kanji",
    "japanese",
    "orange-square"
  ],
  char: "🈚",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u7533 = {
  keywords: [
    "chinese",
    "japanese",
    "kanji",
    "orange-square"
  ],
  char: "🈸",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u55b6 = {
  keywords: [
    "japanese",
    "opening hours",
    "orange-square"
  ],
  char: "🈺",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u6708 = {
  keywords: [
    "chinese",
    "month",
    "moon",
    "japanese",
    "orange-square",
    "kanji"
  ],
  char: "🈷️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const eight_pointed_black_star = {
  keywords: [
    "orange-square",
    "shape",
    "polygon"
  ],
  char: "✴️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const vs = {
  keywords: [
    "words",
    "orange-square"
  ],
  char: "🆚",
  fitzpatrick_scale: false,
  category: "symbols"
};
const accept = {
  keywords: [
    "ok",
    "good",
    "chinese",
    "kanji",
    "agree",
    "yes",
    "orange-circle"
  ],
  char: "🉑",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_flower = {
  keywords: [
    "japanese",
    "spring"
  ],
  char: "💮",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ideograph_advantage = {
  keywords: [
    "chinese",
    "kanji",
    "obtain",
    "get",
    "circle"
  ],
  char: "🉐",
  fitzpatrick_scale: false,
  category: "symbols"
};
const secret = {
  keywords: [
    "privacy",
    "chinese",
    "sshh",
    "kanji",
    "red-circle"
  ],
  char: "㊙️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const congratulations = {
  keywords: [
    "chinese",
    "kanji",
    "japanese",
    "red-circle"
  ],
  char: "㊗️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u5408 = {
  keywords: [
    "japanese",
    "chinese",
    "join",
    "kanji",
    "red-square"
  ],
  char: "🈴",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u6e80 = {
  keywords: [
    "full",
    "chinese",
    "japanese",
    "red-square",
    "kanji"
  ],
  char: "🈵",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u7981 = {
  keywords: [
    "kanji",
    "japanese",
    "chinese",
    "forbidden",
    "limit",
    "restricted",
    "red-square"
  ],
  char: "🈲",
  fitzpatrick_scale: false,
  category: "symbols"
};
const a = {
  keywords: [
    "red-square",
    "alphabet",
    "letter"
  ],
  char: "🅰️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const b = {
  keywords: [
    "red-square",
    "alphabet",
    "letter"
  ],
  char: "🅱️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ab = {
  keywords: [
    "red-square",
    "alphabet"
  ],
  char: "🆎",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cl = {
  keywords: [
    "alphabet",
    "words",
    "red-square"
  ],
  char: "🆑",
  fitzpatrick_scale: false,
  category: "symbols"
};
const o2 = {
  keywords: [
    "alphabet",
    "red-square",
    "letter"
  ],
  char: "🅾️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sos = {
  keywords: [
    "help",
    "red-square",
    "words",
    "emergency",
    "911"
  ],
  char: "🆘",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_entry = {
  keywords: [
    "limit",
    "security",
    "privacy",
    "bad",
    "denied",
    "stop",
    "circle"
  ],
  char: "⛔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const name_badge = {
  keywords: [
    "fire",
    "forbid"
  ],
  char: "📛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_entry_sign = {
  keywords: [
    "forbid",
    "stop",
    "limit",
    "denied",
    "disallow",
    "circle"
  ],
  char: "🚫",
  fitzpatrick_scale: false,
  category: "symbols"
};
const x = {
  keywords: [
    "no",
    "delete",
    "remove",
    "cancel",
    "red"
  ],
  char: "❌",
  fitzpatrick_scale: false,
  category: "symbols"
};
const o = {
  keywords: [
    "circle",
    "round"
  ],
  char: "⭕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const stop_sign = {
  keywords: [
    "stop"
  ],
  char: "🛑",
  fitzpatrick_scale: false,
  category: "symbols"
};
const anger = {
  keywords: [
    "angry",
    "mad"
  ],
  char: "💢",
  fitzpatrick_scale: false,
  category: "symbols"
};
const hotsprings = {
  keywords: [
    "bath",
    "warm",
    "relax"
  ],
  char: "♨️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_pedestrians = {
  keywords: [
    "rules",
    "crossing",
    "walking",
    "circle"
  ],
  char: "🚷",
  fitzpatrick_scale: false,
  category: "symbols"
};
const do_not_litter = {
  keywords: [
    "trash",
    "bin",
    "garbage",
    "circle"
  ],
  char: "🚯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_bicycles = {
  keywords: [
    "cyclist",
    "prohibited",
    "circle"
  ],
  char: "🚳",
  fitzpatrick_scale: false,
  category: "symbols"
};
const underage = {
  keywords: [
    "18",
    "drink",
    "pub",
    "night",
    "minor",
    "circle"
  ],
  char: "🔞",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_mobile_phones = {
  keywords: [
    "iphone",
    "mute",
    "circle"
  ],
  char: "📵",
  fitzpatrick_scale: false,
  category: "symbols"
};
const exclamation = {
  keywords: [
    "heavy_exclamation_mark",
    "danger",
    "surprise",
    "punctuation",
    "wow",
    "warning"
  ],
  char: "❗",
  fitzpatrick_scale: false,
  category: "symbols"
};
const grey_exclamation = {
  keywords: [
    "surprise",
    "punctuation",
    "gray",
    "wow",
    "warning"
  ],
  char: "❕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const question = {
  keywords: [
    "doubt",
    "confused"
  ],
  char: "❓",
  fitzpatrick_scale: false,
  category: "symbols"
};
const grey_question = {
  keywords: [
    "doubts",
    "gray",
    "huh",
    "confused"
  ],
  char: "❔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const bangbang = {
  keywords: [
    "exclamation",
    "surprise"
  ],
  char: "‼️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const interrobang = {
  keywords: [
    "wat",
    "punctuation",
    "surprise"
  ],
  char: "⁉️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const low_brightness = {
  keywords: [
    "sun",
    "afternoon",
    "warm",
    "summer"
  ],
  char: "🔅",
  fitzpatrick_scale: false,
  category: "symbols"
};
const high_brightness = {
  keywords: [
    "sun",
    "light"
  ],
  char: "🔆",
  fitzpatrick_scale: false,
  category: "symbols"
};
const trident = {
  keywords: [
    "weapon",
    "spear"
  ],
  char: "🔱",
  fitzpatrick_scale: false,
  category: "symbols"
};
const fleur_de_lis = {
  keywords: [
    "decorative",
    "scout"
  ],
  char: "⚜",
  fitzpatrick_scale: false,
  category: "symbols"
};
const part_alternation_mark = {
  keywords: [
    "graph",
    "presentation",
    "stats",
    "business",
    "economics",
    "bad"
  ],
  char: "〽️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const warning = {
  keywords: [
    "exclamation",
    "wip",
    "alert",
    "error",
    "problem",
    "issue"
  ],
  char: "⚠️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const children_crossing = {
  keywords: [
    "school",
    "warning",
    "danger",
    "sign",
    "driving",
    "yellow-diamond"
  ],
  char: "🚸",
  fitzpatrick_scale: false,
  category: "symbols"
};
const beginner = {
  keywords: [
    "badge",
    "shield"
  ],
  char: "🔰",
  fitzpatrick_scale: false,
  category: "symbols"
};
const recycle = {
  keywords: [
    "arrow",
    "environment",
    "garbage",
    "trash"
  ],
  char: "♻️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const u6307 = {
  keywords: [
    "chinese",
    "point",
    "green-square",
    "kanji"
  ],
  char: "🈯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const chart = {
  keywords: [
    "green-square",
    "graph",
    "presentation",
    "stats"
  ],
  char: "💹",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sparkle = {
  keywords: [
    "stars",
    "green-square",
    "awesome",
    "good",
    "fireworks"
  ],
  char: "❇️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const eight_spoked_asterisk = {
  keywords: [
    "star",
    "sparkle",
    "green-square"
  ],
  char: "✳️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const negative_squared_cross_mark = {
  keywords: [
    "x",
    "green-square",
    "no",
    "deny"
  ],
  char: "❎",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_check_mark = {
  keywords: [
    "green-square",
    "ok",
    "agree",
    "vote",
    "election",
    "answer",
    "tick"
  ],
  char: "✅",
  fitzpatrick_scale: false,
  category: "symbols"
};
const diamond_shape_with_a_dot_inside = {
  keywords: [
    "jewel",
    "blue",
    "gem",
    "crystal",
    "fancy"
  ],
  char: "💠",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cyclone = {
  keywords: [
    "weather",
    "swirl",
    "blue",
    "cloud",
    "vortex",
    "spiral",
    "whirlpool",
    "spin",
    "tornado",
    "hurricane",
    "typhoon"
  ],
  char: "🌀",
  fitzpatrick_scale: false,
  category: "symbols"
};
const loop = {
  keywords: [
    "tape",
    "cassette"
  ],
  char: "➿",
  fitzpatrick_scale: false,
  category: "symbols"
};
const globe_with_meridians = {
  keywords: [
    "earth",
    "international",
    "world",
    "internet",
    "interweb",
    "i18n"
  ],
  char: "🌐",
  fitzpatrick_scale: false,
  category: "symbols"
};
const m = {
  keywords: [
    "alphabet",
    "blue-circle",
    "letter"
  ],
  char: "Ⓜ️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const atm = {
  keywords: [
    "money",
    "sales",
    "cash",
    "blue-square",
    "payment",
    "bank"
  ],
  char: "🏧",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sa = {
  keywords: [
    "japanese",
    "blue-square",
    "katakana"
  ],
  char: "🈂️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const passport_control = {
  keywords: [
    "custom",
    "blue-square"
  ],
  char: "🛂",
  fitzpatrick_scale: false,
  category: "symbols"
};
const customs = {
  keywords: [
    "passport",
    "border",
    "blue-square"
  ],
  char: "🛃",
  fitzpatrick_scale: false,
  category: "symbols"
};
const baggage_claim = {
  keywords: [
    "blue-square",
    "airport",
    "transport"
  ],
  char: "🛄",
  fitzpatrick_scale: false,
  category: "symbols"
};
const left_luggage = {
  keywords: [
    "blue-square",
    "travel"
  ],
  char: "🛅",
  fitzpatrick_scale: false,
  category: "symbols"
};
const wheelchair = {
  keywords: [
    "blue-square",
    "disabled",
    "a11y",
    "accessibility"
  ],
  char: "♿",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_smoking = {
  keywords: [
    "cigarette",
    "blue-square",
    "smell",
    "smoke"
  ],
  char: "🚭",
  fitzpatrick_scale: false,
  category: "symbols"
};
const wc = {
  keywords: [
    "toilet",
    "restroom",
    "blue-square"
  ],
  char: "🚾",
  fitzpatrick_scale: false,
  category: "symbols"
};
const parking = {
  keywords: [
    "cars",
    "blue-square",
    "alphabet",
    "letter"
  ],
  char: "🅿️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const potable_water = {
  keywords: [
    "blue-square",
    "liquid",
    "restroom",
    "cleaning",
    "faucet"
  ],
  char: "🚰",
  fitzpatrick_scale: false,
  category: "symbols"
};
const mens = {
  keywords: [
    "toilet",
    "restroom",
    "wc",
    "blue-square",
    "gender",
    "male"
  ],
  char: "🚹",
  fitzpatrick_scale: false,
  category: "symbols"
};
const womens = {
  keywords: [
    "purple-square",
    "woman",
    "female",
    "toilet",
    "loo",
    "restroom",
    "gender"
  ],
  char: "🚺",
  fitzpatrick_scale: false,
  category: "symbols"
};
const baby_symbol = {
  keywords: [
    "orange-square",
    "child"
  ],
  char: "🚼",
  fitzpatrick_scale: false,
  category: "symbols"
};
const restroom = {
  keywords: [
    "blue-square",
    "toilet",
    "refresh",
    "wc",
    "gender"
  ],
  char: "🚻",
  fitzpatrick_scale: false,
  category: "symbols"
};
const put_litter_in_its_place = {
  keywords: [
    "blue-square",
    "sign",
    "human",
    "info"
  ],
  char: "🚮",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cinema = {
  keywords: [
    "blue-square",
    "record",
    "film",
    "movie",
    "curtain",
    "stage",
    "theater"
  ],
  char: "🎦",
  fitzpatrick_scale: false,
  category: "symbols"
};
const signal_strength = {
  keywords: [
    "blue-square",
    "reception",
    "phone",
    "internet",
    "connection",
    "wifi",
    "bluetooth",
    "bars"
  ],
  char: "📶",
  fitzpatrick_scale: false,
  category: "symbols"
};
const koko = {
  keywords: [
    "blue-square",
    "here",
    "katakana",
    "japanese",
    "destination"
  ],
  char: "🈁",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ng = {
  keywords: [
    "blue-square",
    "words",
    "shape",
    "icon"
  ],
  char: "🆖",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ok = {
  keywords: [
    "good",
    "agree",
    "yes",
    "blue-square"
  ],
  char: "🆗",
  fitzpatrick_scale: false,
  category: "symbols"
};
const up = {
  keywords: [
    "blue-square",
    "above",
    "high"
  ],
  char: "🆙",
  fitzpatrick_scale: false,
  category: "symbols"
};
const cool = {
  keywords: [
    "words",
    "blue-square"
  ],
  char: "🆒",
  fitzpatrick_scale: false,
  category: "symbols"
};
const free = {
  keywords: [
    "blue-square",
    "words"
  ],
  char: "🆓",
  fitzpatrick_scale: false,
  category: "symbols"
};
const zero = {
  keywords: [
    "0",
    "numbers",
    "blue-square",
    "null"
  ],
  char: "0️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const one = {
  keywords: [
    "blue-square",
    "numbers",
    "1"
  ],
  char: "1️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const two = {
  keywords: [
    "numbers",
    "2",
    "prime",
    "blue-square"
  ],
  char: "2️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const three = {
  keywords: [
    "3",
    "numbers",
    "prime",
    "blue-square"
  ],
  char: "3️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const four = {
  keywords: [
    "4",
    "numbers",
    "blue-square"
  ],
  char: "4️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const five = {
  keywords: [
    "5",
    "numbers",
    "blue-square",
    "prime"
  ],
  char: "5️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const six = {
  keywords: [
    "6",
    "numbers",
    "blue-square"
  ],
  char: "6️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const seven = {
  keywords: [
    "7",
    "numbers",
    "blue-square",
    "prime"
  ],
  char: "7️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const eight = {
  keywords: [
    "8",
    "blue-square",
    "numbers"
  ],
  char: "8️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const nine = {
  keywords: [
    "blue-square",
    "numbers",
    "9"
  ],
  char: "9️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const keycap_ten = {
  keywords: [
    "numbers",
    "10",
    "blue-square"
  ],
  char: "🔟",
  fitzpatrick_scale: false,
  category: "symbols"
};
const asterisk = {
  keywords: [
    "star",
    "keycap"
  ],
  char: "*⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const eject_button = {
  keywords: [
    "blue-square"
  ],
  char: "⏏️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_forward = {
  keywords: [
    "blue-square",
    "right",
    "direction",
    "play"
  ],
  char: "▶️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const pause_button = {
  keywords: [
    "pause",
    "blue-square"
  ],
  char: "⏸",
  fitzpatrick_scale: false,
  category: "symbols"
};
const next_track_button = {
  keywords: [
    "forward",
    "next",
    "blue-square"
  ],
  char: "⏭",
  fitzpatrick_scale: false,
  category: "symbols"
};
const stop_button = {
  keywords: [
    "blue-square"
  ],
  char: "⏹",
  fitzpatrick_scale: false,
  category: "symbols"
};
const record_button = {
  keywords: [
    "blue-square"
  ],
  char: "⏺",
  fitzpatrick_scale: false,
  category: "symbols"
};
const play_or_pause_button = {
  keywords: [
    "blue-square",
    "play",
    "pause"
  ],
  char: "⏯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const previous_track_button = {
  keywords: [
    "backward"
  ],
  char: "⏮",
  fitzpatrick_scale: false,
  category: "symbols"
};
const fast_forward = {
  keywords: [
    "blue-square",
    "play",
    "speed",
    "continue"
  ],
  char: "⏩",
  fitzpatrick_scale: false,
  category: "symbols"
};
const rewind = {
  keywords: [
    "play",
    "blue-square"
  ],
  char: "⏪",
  fitzpatrick_scale: false,
  category: "symbols"
};
const twisted_rightwards_arrows = {
  keywords: [
    "blue-square",
    "shuffle",
    "music",
    "random"
  ],
  char: "🔀",
  fitzpatrick_scale: false,
  category: "symbols"
};
const repeat = {
  keywords: [
    "loop",
    "record"
  ],
  char: "🔁",
  fitzpatrick_scale: false,
  category: "symbols"
};
const repeat_one = {
  keywords: [
    "blue-square",
    "loop"
  ],
  char: "🔂",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_backward = {
  keywords: [
    "blue-square",
    "left",
    "direction"
  ],
  char: "◀️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_up_small = {
  keywords: [
    "blue-square",
    "triangle",
    "direction",
    "point",
    "forward",
    "top"
  ],
  char: "🔼",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_down_small = {
  keywords: [
    "blue-square",
    "direction",
    "bottom"
  ],
  char: "🔽",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_double_up = {
  keywords: [
    "blue-square",
    "direction",
    "top"
  ],
  char: "⏫",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_double_down = {
  keywords: [
    "blue-square",
    "direction",
    "bottom"
  ],
  char: "⏬",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_right = {
  keywords: [
    "blue-square",
    "next"
  ],
  char: "➡️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_left = {
  keywords: [
    "blue-square",
    "previous",
    "back"
  ],
  char: "⬅️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_up = {
  keywords: [
    "blue-square",
    "continue",
    "top",
    "direction"
  ],
  char: "⬆️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_down = {
  keywords: [
    "blue-square",
    "direction",
    "bottom"
  ],
  char: "⬇️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_upper_right = {
  keywords: [
    "blue-square",
    "point",
    "direction",
    "diagonal",
    "northeast"
  ],
  char: "↗️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_lower_right = {
  keywords: [
    "blue-square",
    "direction",
    "diagonal",
    "southeast"
  ],
  char: "↘️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_lower_left = {
  keywords: [
    "blue-square",
    "direction",
    "diagonal",
    "southwest"
  ],
  char: "↙️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_upper_left = {
  keywords: [
    "blue-square",
    "point",
    "direction",
    "diagonal",
    "northwest"
  ],
  char: "↖️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_up_down = {
  keywords: [
    "blue-square",
    "direction",
    "way",
    "vertical"
  ],
  char: "↕️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const left_right_arrow = {
  keywords: [
    "shape",
    "direction",
    "horizontal",
    "sideways"
  ],
  char: "↔️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrows_counterclockwise = {
  keywords: [
    "blue-square",
    "sync",
    "cycle"
  ],
  char: "🔄",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_right_hook = {
  keywords: [
    "blue-square",
    "return",
    "rotate",
    "direction"
  ],
  char: "↪️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const leftwards_arrow_with_hook = {
  keywords: [
    "back",
    "return",
    "blue-square",
    "undo",
    "enter"
  ],
  char: "↩️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_heading_up = {
  keywords: [
    "blue-square",
    "direction",
    "top"
  ],
  char: "⤴️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrow_heading_down = {
  keywords: [
    "blue-square",
    "direction",
    "bottom"
  ],
  char: "⤵️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const hash = {
  keywords: [
    "symbol",
    "blue-square",
    "twitter"
  ],
  char: "#️⃣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const information_source = {
  keywords: [
    "blue-square",
    "alphabet",
    "letter"
  ],
  char: "ℹ️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const abc = {
  keywords: [
    "blue-square",
    "alphabet"
  ],
  char: "🔤",
  fitzpatrick_scale: false,
  category: "symbols"
};
const abcd = {
  keywords: [
    "blue-square",
    "alphabet"
  ],
  char: "🔡",
  fitzpatrick_scale: false,
  category: "symbols"
};
const capital_abcd = {
  keywords: [
    "alphabet",
    "words",
    "blue-square"
  ],
  char: "🔠",
  fitzpatrick_scale: false,
  category: "symbols"
};
const symbols = {
  keywords: [
    "blue-square",
    "music",
    "note",
    "ampersand",
    "percent",
    "glyphs",
    "characters"
  ],
  char: "🔣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const musical_note = {
  keywords: [
    "score",
    "tone",
    "sound"
  ],
  char: "🎵",
  fitzpatrick_scale: false,
  category: "symbols"
};
const notes = {
  keywords: [
    "music",
    "score"
  ],
  char: "🎶",
  fitzpatrick_scale: false,
  category: "symbols"
};
const wavy_dash = {
  keywords: [
    "draw",
    "line",
    "moustache",
    "mustache",
    "squiggle",
    "scribble"
  ],
  char: "〰️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const curly_loop = {
  keywords: [
    "scribble",
    "draw",
    "shape",
    "squiggle"
  ],
  char: "➰",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_check_mark = {
  keywords: [
    "ok",
    "nike",
    "answer",
    "yes",
    "tick"
  ],
  char: "✔️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const arrows_clockwise = {
  keywords: [
    "sync",
    "cycle",
    "round",
    "repeat"
  ],
  char: "🔃",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_plus_sign = {
  keywords: [
    "math",
    "calculation",
    "addition",
    "more",
    "increase"
  ],
  char: "➕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_minus_sign = {
  keywords: [
    "math",
    "calculation",
    "subtract",
    "less"
  ],
  char: "➖",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_division_sign = {
  keywords: [
    "divide",
    "math",
    "calculation"
  ],
  char: "➗",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_multiplication_x = {
  keywords: [
    "math",
    "calculation"
  ],
  char: "✖️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const infinity = {
  keywords: [
    "forever"
  ],
  char: "♾",
  fitzpatrick_scale: false,
  category: "symbols"
};
const heavy_dollar_sign = {
  keywords: [
    "money",
    "sales",
    "payment",
    "currency",
    "buck"
  ],
  char: "💲",
  fitzpatrick_scale: false,
  category: "symbols"
};
const currency_exchange = {
  keywords: [
    "money",
    "sales",
    "dollar",
    "travel"
  ],
  char: "💱",
  fitzpatrick_scale: false,
  category: "symbols"
};
const copyright = {
  keywords: [
    "ip",
    "license",
    "circle",
    "law",
    "legal"
  ],
  char: "©️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const registered = {
  keywords: [
    "alphabet",
    "circle"
  ],
  char: "®️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const tm = {
  keywords: [
    "trademark",
    "brand",
    "law",
    "legal"
  ],
  char: "™️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const end = {
  keywords: [
    "words",
    "arrow"
  ],
  char: "🔚",
  fitzpatrick_scale: false,
  category: "symbols"
};
const back = {
  keywords: [
    "arrow",
    "words",
    "return"
  ],
  char: "🔙",
  fitzpatrick_scale: false,
  category: "symbols"
};
const on = {
  keywords: [
    "arrow",
    "words"
  ],
  char: "🔛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const top = {
  keywords: [
    "words",
    "blue-square"
  ],
  char: "🔝",
  fitzpatrick_scale: false,
  category: "symbols"
};
const soon = {
  keywords: [
    "arrow",
    "words"
  ],
  char: "🔜",
  fitzpatrick_scale: false,
  category: "symbols"
};
const ballot_box_with_check = {
  keywords: [
    "ok",
    "agree",
    "confirm",
    "black-square",
    "vote",
    "election",
    "yes",
    "tick"
  ],
  char: "☑️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const radio_button = {
  keywords: [
    "input",
    "old",
    "music",
    "circle"
  ],
  char: "🔘",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_circle = {
  keywords: [
    "shape",
    "round"
  ],
  char: "⚪",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_circle = {
  keywords: [
    "shape",
    "button",
    "round"
  ],
  char: "⚫",
  fitzpatrick_scale: false,
  category: "symbols"
};
const red_circle = {
  keywords: [
    "shape",
    "error",
    "danger"
  ],
  char: "🔴",
  fitzpatrick_scale: false,
  category: "symbols"
};
const large_blue_circle = {
  keywords: [
    "shape",
    "icon",
    "button"
  ],
  char: "🔵",
  fitzpatrick_scale: false,
  category: "symbols"
};
const small_orange_diamond = {
  keywords: [
    "shape",
    "jewel",
    "gem"
  ],
  char: "🔸",
  fitzpatrick_scale: false,
  category: "symbols"
};
const small_blue_diamond = {
  keywords: [
    "shape",
    "jewel",
    "gem"
  ],
  char: "🔹",
  fitzpatrick_scale: false,
  category: "symbols"
};
const large_orange_diamond = {
  keywords: [
    "shape",
    "jewel",
    "gem"
  ],
  char: "🔶",
  fitzpatrick_scale: false,
  category: "symbols"
};
const large_blue_diamond = {
  keywords: [
    "shape",
    "jewel",
    "gem"
  ],
  char: "🔷",
  fitzpatrick_scale: false,
  category: "symbols"
};
const small_red_triangle = {
  keywords: [
    "shape",
    "direction",
    "up",
    "top"
  ],
  char: "🔺",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_small_square = {
  keywords: [
    "shape",
    "icon"
  ],
  char: "▪️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_small_square = {
  keywords: [
    "shape",
    "icon"
  ],
  char: "▫️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_large_square = {
  keywords: [
    "shape",
    "icon",
    "button"
  ],
  char: "⬛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_large_square = {
  keywords: [
    "shape",
    "icon",
    "stone",
    "button"
  ],
  char: "⬜",
  fitzpatrick_scale: false,
  category: "symbols"
};
const small_red_triangle_down = {
  keywords: [
    "shape",
    "direction",
    "bottom"
  ],
  char: "🔻",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_medium_square = {
  keywords: [
    "shape",
    "button",
    "icon"
  ],
  char: "◼️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_medium_square = {
  keywords: [
    "shape",
    "stone",
    "icon"
  ],
  char: "◻️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_medium_small_square = {
  keywords: [
    "icon",
    "shape",
    "button"
  ],
  char: "◾",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_medium_small_square = {
  keywords: [
    "shape",
    "stone",
    "icon",
    "button"
  ],
  char: "◽",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_square_button = {
  keywords: [
    "shape",
    "input",
    "frame"
  ],
  char: "🔲",
  fitzpatrick_scale: false,
  category: "symbols"
};
const white_square_button = {
  keywords: [
    "shape",
    "input"
  ],
  char: "🔳",
  fitzpatrick_scale: false,
  category: "symbols"
};
const speaker = {
  keywords: [
    "sound",
    "volume",
    "silence",
    "broadcast"
  ],
  char: "🔈",
  fitzpatrick_scale: false,
  category: "symbols"
};
const sound = {
  keywords: [
    "volume",
    "speaker",
    "broadcast"
  ],
  char: "🔉",
  fitzpatrick_scale: false,
  category: "symbols"
};
const loud_sound = {
  keywords: [
    "volume",
    "noise",
    "noisy",
    "speaker",
    "broadcast"
  ],
  char: "🔊",
  fitzpatrick_scale: false,
  category: "symbols"
};
const mute = {
  keywords: [
    "sound",
    "volume",
    "silence",
    "quiet"
  ],
  char: "🔇",
  fitzpatrick_scale: false,
  category: "symbols"
};
const mega = {
  keywords: [
    "sound",
    "speaker",
    "volume"
  ],
  char: "📣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const loudspeaker = {
  keywords: [
    "volume",
    "sound"
  ],
  char: "📢",
  fitzpatrick_scale: false,
  category: "symbols"
};
const bell = {
  keywords: [
    "sound",
    "notification",
    "christmas",
    "xmas",
    "chime"
  ],
  char: "🔔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const no_bell = {
  keywords: [
    "sound",
    "volume",
    "mute",
    "quiet",
    "silent"
  ],
  char: "🔕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const black_joker = {
  keywords: [
    "poker",
    "cards",
    "game",
    "play",
    "magic"
  ],
  char: "🃏",
  fitzpatrick_scale: false,
  category: "symbols"
};
const mahjong = {
  keywords: [
    "game",
    "play",
    "chinese",
    "kanji"
  ],
  char: "🀄",
  fitzpatrick_scale: false,
  category: "symbols"
};
const spades = {
  keywords: [
    "poker",
    "cards",
    "suits",
    "magic"
  ],
  char: "♠️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clubs = {
  keywords: [
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  char: "♣️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const hearts = {
  keywords: [
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  char: "♥️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const diamonds = {
  keywords: [
    "poker",
    "cards",
    "magic",
    "suits"
  ],
  char: "♦️",
  fitzpatrick_scale: false,
  category: "symbols"
};
const flower_playing_cards = {
  keywords: [
    "game",
    "sunset",
    "red"
  ],
  char: "🎴",
  fitzpatrick_scale: false,
  category: "symbols"
};
const thought_balloon = {
  keywords: [
    "bubble",
    "cloud",
    "speech",
    "thinking",
    "dream"
  ],
  char: "💭",
  fitzpatrick_scale: false,
  category: "symbols"
};
const right_anger_bubble = {
  keywords: [
    "caption",
    "speech",
    "thinking",
    "mad"
  ],
  char: "🗯",
  fitzpatrick_scale: false,
  category: "symbols"
};
const speech_balloon = {
  keywords: [
    "bubble",
    "words",
    "message",
    "talk",
    "chatting"
  ],
  char: "💬",
  fitzpatrick_scale: false,
  category: "symbols"
};
const left_speech_bubble = {
  keywords: [
    "words",
    "message",
    "talk",
    "chatting"
  ],
  char: "🗨",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock1 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕐",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock2 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕑",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock3 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕒",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock4 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕓",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock5 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕔",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock6 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule",
    "dawn",
    "dusk"
  ],
  char: "🕕",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock7 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕖",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock8 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕗",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock9 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕘",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock10 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕙",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock11 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕚",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock12 = {
  keywords: [
    "time",
    "noon",
    "midnight",
    "midday",
    "late",
    "early",
    "schedule"
  ],
  char: "🕛",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock130 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕜",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock230 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕝",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock330 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕞",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock430 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕟",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock530 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕠",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock630 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕡",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock730 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕢",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock830 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕣",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock930 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕤",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock1030 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕥",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock1130 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕦",
  fitzpatrick_scale: false,
  category: "symbols"
};
const clock1230 = {
  keywords: [
    "time",
    "late",
    "early",
    "schedule"
  ],
  char: "🕧",
  fitzpatrick_scale: false,
  category: "symbols"
};
const afghanistan = {
  keywords: [
    "af",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const aland_islands = {
  keywords: [
    "Åland",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇽",
  fitzpatrick_scale: false,
  category: "flags"
};
const albania = {
  keywords: [
    "al",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const algeria = {
  keywords: [
    "dz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇩🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const american_samoa = {
  keywords: [
    "american",
    "ws",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const andorra = {
  keywords: [
    "ad",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const angola = {
  keywords: [
    "ao",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const anguilla = {
  keywords: [
    "ai",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const antarctica = {
  keywords: [
    "aq",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇶",
  fitzpatrick_scale: false,
  category: "flags"
};
const antigua_barbuda = {
  keywords: [
    "antigua",
    "barbuda",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const argentina = {
  keywords: [
    "ar",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const armenia = {
  keywords: [
    "am",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const aruba = {
  keywords: [
    "aw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const australia = {
  keywords: [
    "au",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const austria = {
  keywords: [
    "at",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const azerbaijan = {
  keywords: [
    "az",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const bahamas = {
  keywords: [
    "bs",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const bahrain = {
  keywords: [
    "bh",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const bangladesh = {
  keywords: [
    "bd",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const barbados = {
  keywords: [
    "bb",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇧",
  fitzpatrick_scale: false,
  category: "flags"
};
const belarus = {
  keywords: [
    "by",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const belgium = {
  keywords: [
    "be",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const belize = {
  keywords: [
    "bz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const benin = {
  keywords: [
    "bj",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇯",
  fitzpatrick_scale: false,
  category: "flags"
};
const bermuda = {
  keywords: [
    "bm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const bhutan = {
  keywords: [
    "bt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const bolivia = {
  keywords: [
    "bo",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const caribbean_netherlands = {
  keywords: [
    "bonaire",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇶",
  fitzpatrick_scale: false,
  category: "flags"
};
const bosnia_herzegovina = {
  keywords: [
    "bosnia",
    "herzegovina",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const botswana = {
  keywords: [
    "bw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const brazil = {
  keywords: [
    "br",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const british_indian_ocean_territory = {
  keywords: [
    "british",
    "indian",
    "ocean",
    "territory",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const british_virgin_islands = {
  keywords: [
    "british",
    "virgin",
    "islands",
    "bvi",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const brunei = {
  keywords: [
    "bn",
    "darussalam",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const bulgaria = {
  keywords: [
    "bg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const burkina_faso = {
  keywords: [
    "burkina",
    "faso",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const burundi = {
  keywords: [
    "bi",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const cape_verde = {
  keywords: [
    "cabo",
    "verde",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇻",
  fitzpatrick_scale: false,
  category: "flags"
};
const cambodia = {
  keywords: [
    "kh",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const cameroon = {
  keywords: [
    "cm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const canada = {
  keywords: [
    "ca",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const canary_islands = {
  keywords: [
    "canary",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const cayman_islands = {
  keywords: [
    "cayman",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const central_african_republic = {
  keywords: [
    "central",
    "african",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const chad = {
  keywords: [
    "td",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const chile = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const cn = {
  keywords: [
    "china",
    "chinese",
    "prc",
    "flag",
    "country",
    "nation",
    "banner"
  ],
  char: "🇨🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const christmas_island = {
  keywords: [
    "christmas",
    "island",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇽",
  fitzpatrick_scale: false,
  category: "flags"
};
const cocos_islands = {
  keywords: [
    "cocos",
    "keeling",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const colombia = {
  keywords: [
    "co",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const comoros = {
  keywords: [
    "km",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const congo_brazzaville = {
  keywords: [
    "congo",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const congo_kinshasa = {
  keywords: [
    "congo",
    "democratic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const cook_islands = {
  keywords: [
    "cook",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const costa_rica = {
  keywords: [
    "costa",
    "rica",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const croatia = {
  keywords: [
    "hr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇭🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const cuba = {
  keywords: [
    "cu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const curacao = {
  keywords: [
    "curaçao",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const cyprus = {
  keywords: [
    "cy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const czech_republic = {
  keywords: [
    "cz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const denmark = {
  keywords: [
    "dk",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇩🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const djibouti = {
  keywords: [
    "dj",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇩🇯",
  fitzpatrick_scale: false,
  category: "flags"
};
const dominica = {
  keywords: [
    "dm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇩🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const dominican_republic = {
  keywords: [
    "dominican",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇩🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const ecuador = {
  keywords: [
    "ec",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const egypt = {
  keywords: [
    "eg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const el_salvador = {
  keywords: [
    "el",
    "salvador",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇻",
  fitzpatrick_scale: false,
  category: "flags"
};
const equatorial_guinea = {
  keywords: [
    "equatorial",
    "gn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇶",
  fitzpatrick_scale: false,
  category: "flags"
};
const eritrea = {
  keywords: [
    "er",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const estonia = {
  keywords: [
    "ee",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const ethiopia = {
  keywords: [
    "et",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const eu = {
  keywords: [
    "european",
    "union",
    "flag",
    "banner"
  ],
  char: "🇪🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const falkland_islands = {
  keywords: [
    "falkland",
    "islands",
    "malvinas",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇫🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const faroe_islands = {
  keywords: [
    "faroe",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇫🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const fiji = {
  keywords: [
    "fj",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇫🇯",
  fitzpatrick_scale: false,
  category: "flags"
};
const finland = {
  keywords: [
    "fi",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇫🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const fr = {
  keywords: [
    "banner",
    "flag",
    "nation",
    "france",
    "french",
    "country"
  ],
  char: "🇫🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const french_guiana = {
  keywords: [
    "french",
    "guiana",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const french_polynesia = {
  keywords: [
    "french",
    "polynesia",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const french_southern_territories = {
  keywords: [
    "french",
    "southern",
    "territories",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const gabon = {
  keywords: [
    "ga",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const gambia = {
  keywords: [
    "gm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const georgia = {
  keywords: [
    "ge",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const de = {
  keywords: [
    "german",
    "nation",
    "flag",
    "country",
    "banner"
  ],
  char: "🇩🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const ghana = {
  keywords: [
    "gh",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const gibraltar = {
  keywords: [
    "gi",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const greece = {
  keywords: [
    "gr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const greenland = {
  keywords: [
    "gl",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const grenada = {
  keywords: [
    "gd",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const guadeloupe = {
  keywords: [
    "gp",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇵",
  fitzpatrick_scale: false,
  category: "flags"
};
const guam = {
  keywords: [
    "gu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const guatemala = {
  keywords: [
    "gt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const guernsey = {
  keywords: [
    "gg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const guinea = {
  keywords: [
    "gn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const guinea_bissau = {
  keywords: [
    "gw",
    "bissau",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const guyana = {
  keywords: [
    "gy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const haiti = {
  keywords: [
    "ht",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇭🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const honduras = {
  keywords: [
    "hn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇭🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const hong_kong = {
  keywords: [
    "hong",
    "kong",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇭🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const hungary = {
  keywords: [
    "hu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇭🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const iceland = {
  keywords: [
    "is",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const india = {
  keywords: [
    "in",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const indonesia = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const iran = {
  keywords: [
    "iran,",
    "islamic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const iraq = {
  keywords: [
    "iq",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇶",
  fitzpatrick_scale: false,
  category: "flags"
};
const ireland = {
  keywords: [
    "ie",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const isle_of_man = {
  keywords: [
    "isle",
    "man",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const israel = {
  keywords: [
    "il",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const it = {
  keywords: [
    "italy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇮🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const cote_divoire = {
  keywords: [
    "ivory",
    "coast",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const jamaica = {
  keywords: [
    "jm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇯🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const jp = {
  keywords: [
    "japanese",
    "nation",
    "flag",
    "country",
    "banner"
  ],
  char: "🇯🇵",
  fitzpatrick_scale: false,
  category: "flags"
};
const jersey = {
  keywords: [
    "je",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇯🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const jordan = {
  keywords: [
    "jo",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇯🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const kazakhstan = {
  keywords: [
    "kz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const kenya = {
  keywords: [
    "ke",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const kiribati = {
  keywords: [
    "ki",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const kosovo = {
  keywords: [
    "xk",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇽🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const kuwait = {
  keywords: [
    "kw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const kyrgyzstan = {
  keywords: [
    "kg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const laos = {
  keywords: [
    "lao",
    "democratic",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const latvia = {
  keywords: [
    "lv",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇻",
  fitzpatrick_scale: false,
  category: "flags"
};
const lebanon = {
  keywords: [
    "lb",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇧",
  fitzpatrick_scale: false,
  category: "flags"
};
const lesotho = {
  keywords: [
    "ls",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const liberia = {
  keywords: [
    "lr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const libya = {
  keywords: [
    "ly",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const liechtenstein = {
  keywords: [
    "li",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const lithuania = {
  keywords: [
    "lt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const luxembourg = {
  keywords: [
    "lu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const macau = {
  keywords: [
    "macao",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const macedonia = {
  keywords: [
    "macedonia,",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const madagascar = {
  keywords: [
    "mg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const malawi = {
  keywords: [
    "mw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const malaysia = {
  keywords: [
    "my",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const maldives = {
  keywords: [
    "mv",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇻",
  fitzpatrick_scale: false,
  category: "flags"
};
const mali = {
  keywords: [
    "ml",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const malta = {
  keywords: [
    "mt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const marshall_islands = {
  keywords: [
    "marshall",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const martinique = {
  keywords: [
    "mq",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇶",
  fitzpatrick_scale: false,
  category: "flags"
};
const mauritania = {
  keywords: [
    "mr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const mauritius = {
  keywords: [
    "mu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const mayotte = {
  keywords: [
    "yt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇾🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const mexico = {
  keywords: [
    "mx",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇽",
  fitzpatrick_scale: false,
  category: "flags"
};
const micronesia = {
  keywords: [
    "micronesia,",
    "federated",
    "states",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇫🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const moldova = {
  keywords: [
    "moldova,",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const monaco = {
  keywords: [
    "mc",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const mongolia = {
  keywords: [
    "mn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const montenegro = {
  keywords: [
    "me",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const montserrat = {
  keywords: [
    "ms",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const morocco = {
  keywords: [
    "ma",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const mozambique = {
  keywords: [
    "mz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const myanmar = {
  keywords: [
    "mm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const namibia = {
  keywords: [
    "na",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const nauru = {
  keywords: [
    "nr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const nepal = {
  keywords: [
    "np",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇵",
  fitzpatrick_scale: false,
  category: "flags"
};
const netherlands = {
  keywords: [
    "nl",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const new_caledonia = {
  keywords: [
    "new",
    "caledonia",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const new_zealand = {
  keywords: [
    "new",
    "zealand",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const nicaragua = {
  keywords: [
    "ni",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const niger = {
  keywords: [
    "ne",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const nigeria = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const niue = {
  keywords: [
    "nu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const norfolk_island = {
  keywords: [
    "norfolk",
    "island",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const northern_mariana_islands = {
  keywords: [
    "northern",
    "mariana",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇲🇵",
  fitzpatrick_scale: false,
  category: "flags"
};
const north_korea = {
  keywords: [
    "north",
    "korea",
    "nation",
    "flag",
    "country",
    "banner"
  ],
  char: "🇰🇵",
  fitzpatrick_scale: false,
  category: "flags"
};
const norway = {
  keywords: [
    "no",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇳🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const oman = {
  keywords: [
    "om_symbol",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇴🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const pakistan = {
  keywords: [
    "pk",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const palau = {
  keywords: [
    "pw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const palestinian_territories = {
  keywords: [
    "palestine",
    "palestinian",
    "territories",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const panama = {
  keywords: [
    "pa",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const papua_new_guinea = {
  keywords: [
    "papua",
    "new",
    "guinea",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const paraguay = {
  keywords: [
    "py",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const peru = {
  keywords: [
    "pe",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const philippines = {
  keywords: [
    "ph",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const pitcairn_islands = {
  keywords: [
    "pitcairn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const poland = {
  keywords: [
    "pl",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const portugal = {
  keywords: [
    "pt",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const puerto_rico = {
  keywords: [
    "puerto",
    "rico",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const qatar = {
  keywords: [
    "qa",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇶🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const reunion = {
  keywords: [
    "réunion",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇷🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const romania = {
  keywords: [
    "ro",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇷🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const ru = {
  keywords: [
    "russian",
    "federation",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇷🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const rwanda = {
  keywords: [
    "rw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇷🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_barthelemy = {
  keywords: [
    "saint",
    "barthélemy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇧🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_helena = {
  keywords: [
    "saint",
    "helena",
    "ascension",
    "tristan",
    "cunha",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_kitts_nevis = {
  keywords: [
    "saint",
    "kitts",
    "nevis",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇰🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_lucia = {
  keywords: [
    "saint",
    "lucia",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_pierre_miquelon = {
  keywords: [
    "saint",
    "pierre",
    "miquelon",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇵🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const st_vincent_grenadines = {
  keywords: [
    "saint",
    "vincent",
    "grenadines",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const samoa = {
  keywords: [
    "ws",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇼🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const san_marino = {
  keywords: [
    "san",
    "marino",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const sao_tome_principe = {
  keywords: [
    "sao",
    "tome",
    "principe",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const saudi_arabia = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const senegal = {
  keywords: [
    "sn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const serbia = {
  keywords: [
    "rs",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇷🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const seychelles = {
  keywords: [
    "sc",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const sierra_leone = {
  keywords: [
    "sierra",
    "leone",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const singapore = {
  keywords: [
    "sg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const sint_maarten = {
  keywords: [
    "sint",
    "maarten",
    "dutch",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇽",
  fitzpatrick_scale: false,
  category: "flags"
};
const slovakia = {
  keywords: [
    "sk",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const slovenia = {
  keywords: [
    "si",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const solomon_islands = {
  keywords: [
    "solomon",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇧",
  fitzpatrick_scale: false,
  category: "flags"
};
const somalia = {
  keywords: [
    "so",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const south_africa = {
  keywords: [
    "south",
    "africa",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇿🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const south_georgia_south_sandwich_islands = {
  keywords: [
    "south",
    "georgia",
    "sandwich",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇬🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const kr = {
  keywords: [
    "south",
    "korea",
    "nation",
    "flag",
    "country",
    "banner"
  ],
  char: "🇰🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const south_sudan = {
  keywords: [
    "south",
    "sd",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const es = {
  keywords: [
    "spain",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const sri_lanka = {
  keywords: [
    "sri",
    "lanka",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇱🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const sudan = {
  keywords: [
    "sd",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇩",
  fitzpatrick_scale: false,
  category: "flags"
};
const suriname = {
  keywords: [
    "sr",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const swaziland = {
  keywords: [
    "sz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const sweden = {
  keywords: [
    "se",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const switzerland = {
  keywords: [
    "ch",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇨🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const syria = {
  keywords: [
    "syrian",
    "arab",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇸🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const taiwan = {
  keywords: [
    "tw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const tajikistan = {
  keywords: [
    "tj",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇯",
  fitzpatrick_scale: false,
  category: "flags"
};
const tanzania = {
  keywords: [
    "tanzania,",
    "united",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const thailand = {
  keywords: [
    "th",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const timor_leste = {
  keywords: [
    "timor",
    "leste",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇱",
  fitzpatrick_scale: false,
  category: "flags"
};
const togo = {
  keywords: [
    "tg",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const tokelau = {
  keywords: [
    "tk",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇰",
  fitzpatrick_scale: false,
  category: "flags"
};
const tonga = {
  keywords: [
    "to",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇴",
  fitzpatrick_scale: false,
  category: "flags"
};
const trinidad_tobago = {
  keywords: [
    "trinidad",
    "tobago",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇹",
  fitzpatrick_scale: false,
  category: "flags"
};
const tunisia = {
  keywords: [
    "tn",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const tr = {
  keywords: [
    "turkey",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇷",
  fitzpatrick_scale: false,
  category: "flags"
};
const turkmenistan = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const turks_caicos_islands = {
  keywords: [
    "turks",
    "caicos",
    "islands",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇨",
  fitzpatrick_scale: false,
  category: "flags"
};
const tuvalu = {
  keywords: [
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇹🇻",
  fitzpatrick_scale: false,
  category: "flags"
};
const uganda = {
  keywords: [
    "ug",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇺🇬",
  fitzpatrick_scale: false,
  category: "flags"
};
const ukraine = {
  keywords: [
    "ua",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇺🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const united_arab_emirates = {
  keywords: [
    "united",
    "arab",
    "emirates",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇦🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const uk = {
  keywords: [
    "united",
    "kingdom",
    "great",
    "britain",
    "northern",
    "ireland",
    "flag",
    "nation",
    "country",
    "banner",
    "british",
    "UK",
    "english",
    "england",
    "union jack"
  ],
  char: "🇬🇧",
  fitzpatrick_scale: false,
  category: "flags"
};
const england = {
  keywords: [
    "flag",
    "english"
  ],
  char: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  fitzpatrick_scale: false,
  category: "flags"
};
const scotland = {
  keywords: [
    "flag",
    "scottish"
  ],
  char: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  fitzpatrick_scale: false,
  category: "flags"
};
const wales = {
  keywords: [
    "flag",
    "welsh"
  ],
  char: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
  fitzpatrick_scale: false,
  category: "flags"
};
const us = {
  keywords: [
    "united",
    "states",
    "america",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇺🇸",
  fitzpatrick_scale: false,
  category: "flags"
};
const us_virgin_islands = {
  keywords: [
    "virgin",
    "islands",
    "us",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇮",
  fitzpatrick_scale: false,
  category: "flags"
};
const uruguay = {
  keywords: [
    "uy",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇺🇾",
  fitzpatrick_scale: false,
  category: "flags"
};
const uzbekistan = {
  keywords: [
    "uz",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇺🇿",
  fitzpatrick_scale: false,
  category: "flags"
};
const vanuatu = {
  keywords: [
    "vu",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇺",
  fitzpatrick_scale: false,
  category: "flags"
};
const vatican_city = {
  keywords: [
    "vatican",
    "city",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇦",
  fitzpatrick_scale: false,
  category: "flags"
};
const venezuela = {
  keywords: [
    "ve",
    "bolivarian",
    "republic",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const vietnam = {
  keywords: [
    "viet",
    "nam",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇻🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const wallis_futuna = {
  keywords: [
    "wallis",
    "futuna",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇼🇫",
  fitzpatrick_scale: false,
  category: "flags"
};
const western_sahara = {
  keywords: [
    "western",
    "sahara",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇪🇭",
  fitzpatrick_scale: false,
  category: "flags"
};
const yemen = {
  keywords: [
    "ye",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇾🇪",
  fitzpatrick_scale: false,
  category: "flags"
};
const zambia = {
  keywords: [
    "zm",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇿🇲",
  fitzpatrick_scale: false,
  category: "flags"
};
const zimbabwe = {
  keywords: [
    "zw",
    "flag",
    "nation",
    "country",
    "banner"
  ],
  char: "🇿🇼",
  fitzpatrick_scale: false,
  category: "flags"
};
const united_nations = {
  keywords: [
    "un",
    "flag",
    "banner"
  ],
  char: "🇺🇳",
  fitzpatrick_scale: false,
  category: "flags"
};
const pirate_flag = {
  keywords: [
    "skull",
    "crossbones",
    "flag",
    "banner"
  ],
  char: "🏴‍☠️",
  fitzpatrick_scale: false,
  category: "flags"
};
const require$$0 = {
  "100": {
    keywords: [
      "score",
      "perfect",
      "numbers",
      "century",
      "exam",
      "quiz",
      "test",
      "pass",
      "hundred"
    ],
    char: "💯",
    fitzpatrick_scale: false,
    category: "symbols"
  },
  "1234": {
    keywords: [
      "numbers",
      "blue-square"
    ],
    char: "🔢",
    fitzpatrick_scale: false,
    category: "symbols"
  },
  grinning,
  grimacing,
  grin,
  joy,
  rofl,
  partying,
  smiley,
  smile,
  sweat_smile,
  laughing,
  innocent,
  wink,
  blush,
  slightly_smiling_face,
  upside_down_face,
  relaxed,
  yum,
  relieved,
  heart_eyes,
  smiling_face_with_three_hearts,
  kissing_heart,
  kissing,
  kissing_smiling_eyes,
  kissing_closed_eyes,
  stuck_out_tongue_winking_eye,
  zany,
  raised_eyebrow,
  monocle,
  stuck_out_tongue_closed_eyes,
  stuck_out_tongue,
  money_mouth_face,
  nerd_face,
  sunglasses,
  star_struck,
  clown_face,
  cowboy_hat_face,
  hugs,
  smirk,
  no_mouth,
  neutral_face,
  expressionless,
  unamused,
  roll_eyes,
  thinking,
  lying_face,
  hand_over_mouth,
  shushing,
  symbols_over_mouth,
  exploding_head,
  flushed,
  disappointed,
  worried,
  angry,
  rage,
  pensive,
  confused,
  slightly_frowning_face,
  frowning_face,
  persevere,
  confounded,
  tired_face,
  weary,
  pleading,
  triumph,
  open_mouth,
  scream,
  fearful,
  cold_sweat,
  hushed,
  frowning,
  anguished,
  cry,
  disappointed_relieved,
  drooling_face,
  sleepy,
  sweat,
  hot,
  cold,
  sob,
  dizzy_face,
  astonished,
  zipper_mouth_face,
  nauseated_face,
  sneezing_face,
  vomiting,
  mask,
  face_with_thermometer,
  face_with_head_bandage,
  woozy,
  sleeping,
  zzz,
  poop,
  smiling_imp,
  imp,
  japanese_ogre,
  japanese_goblin,
  skull,
  ghost,
  alien,
  robot,
  smiley_cat,
  smile_cat,
  joy_cat,
  heart_eyes_cat,
  smirk_cat,
  kissing_cat,
  scream_cat,
  crying_cat_face,
  pouting_cat,
  palms_up,
  raised_hands,
  clap,
  wave,
  call_me_hand,
  "+1": {
    keywords: [
      "thumbsup",
      "yes",
      "awesome",
      "good",
      "agree",
      "accept",
      "cool",
      "hand",
      "like"
    ],
    char: "👍",
    fitzpatrick_scale: true,
    category: "people"
  },
  "-1": {
    keywords: [
      "thumbsdown",
      "no",
      "dislike",
      "hand"
    ],
    char: "👎",
    fitzpatrick_scale: true,
    category: "people"
  },
  facepunch,
  fist,
  fist_left,
  fist_right,
  v,
  ok_hand,
  raised_hand,
  raised_back_of_hand,
  open_hands,
  muscle,
  pray,
  foot,
  leg,
  handshake,
  point_up,
  point_up_2,
  point_down,
  point_left,
  point_right,
  fu,
  raised_hand_with_fingers_splayed,
  love_you,
  metal,
  crossed_fingers,
  vulcan_salute,
  writing_hand,
  selfie,
  nail_care,
  lips,
  tooth,
  tongue,
  ear,
  nose,
  eye,
  eyes,
  brain,
  bust_in_silhouette,
  busts_in_silhouette,
  speaking_head,
  baby,
  child,
  boy,
  girl,
  adult,
  man,
  woman,
  blonde_woman,
  blonde_man,
  bearded_person,
  older_adult,
  older_man,
  older_woman,
  man_with_gua_pi_mao,
  woman_with_headscarf,
  woman_with_turban,
  man_with_turban,
  policewoman,
  policeman,
  construction_worker_woman,
  construction_worker_man,
  guardswoman,
  guardsman,
  female_detective,
  male_detective,
  woman_health_worker,
  man_health_worker,
  woman_farmer,
  man_farmer,
  woman_cook,
  man_cook,
  woman_student,
  man_student,
  woman_singer,
  man_singer,
  woman_teacher,
  man_teacher,
  woman_factory_worker,
  man_factory_worker,
  woman_technologist,
  man_technologist,
  woman_office_worker,
  man_office_worker,
  woman_mechanic,
  man_mechanic,
  woman_scientist,
  man_scientist,
  woman_artist,
  man_artist,
  woman_firefighter,
  man_firefighter,
  woman_pilot,
  man_pilot,
  woman_astronaut,
  man_astronaut,
  woman_judge,
  man_judge,
  woman_superhero,
  man_superhero,
  woman_supervillain,
  man_supervillain,
  mrs_claus,
  santa,
  sorceress,
  wizard,
  woman_elf,
  man_elf,
  woman_vampire,
  man_vampire,
  woman_zombie,
  man_zombie,
  woman_genie,
  man_genie,
  mermaid,
  merman,
  woman_fairy,
  man_fairy,
  angel,
  pregnant_woman,
  breastfeeding,
  princess,
  prince,
  bride_with_veil,
  man_in_tuxedo,
  running_woman,
  running_man,
  walking_woman,
  walking_man,
  dancer,
  man_dancing,
  dancing_women,
  dancing_men,
  couple,
  two_men_holding_hands,
  two_women_holding_hands,
  bowing_woman,
  bowing_man,
  man_facepalming,
  woman_facepalming,
  woman_shrugging,
  man_shrugging,
  tipping_hand_woman,
  tipping_hand_man,
  no_good_woman,
  no_good_man,
  ok_woman,
  ok_man,
  raising_hand_woman,
  raising_hand_man,
  pouting_woman,
  pouting_man,
  frowning_woman,
  frowning_man,
  haircut_woman,
  haircut_man,
  massage_woman,
  massage_man,
  woman_in_steamy_room,
  man_in_steamy_room,
  couple_with_heart_woman_man,
  couple_with_heart_woman_woman,
  couple_with_heart_man_man,
  couplekiss_man_woman,
  couplekiss_woman_woman,
  couplekiss_man_man,
  family_man_woman_boy,
  family_man_woman_girl,
  family_man_woman_girl_boy,
  family_man_woman_boy_boy,
  family_man_woman_girl_girl,
  family_woman_woman_boy,
  family_woman_woman_girl,
  family_woman_woman_girl_boy,
  family_woman_woman_boy_boy,
  family_woman_woman_girl_girl,
  family_man_man_boy,
  family_man_man_girl,
  family_man_man_girl_boy,
  family_man_man_boy_boy,
  family_man_man_girl_girl,
  family_woman_boy,
  family_woman_girl,
  family_woman_girl_boy,
  family_woman_boy_boy,
  family_woman_girl_girl,
  family_man_boy,
  family_man_girl,
  family_man_girl_boy,
  family_man_boy_boy,
  family_man_girl_girl,
  yarn,
  thread,
  coat,
  labcoat,
  womans_clothes,
  tshirt,
  jeans,
  necktie,
  dress,
  bikini,
  kimono,
  lipstick,
  kiss,
  footprints,
  flat_shoe,
  high_heel,
  sandal,
  boot,
  mans_shoe,
  athletic_shoe,
  hiking_boot,
  socks,
  gloves,
  scarf,
  womans_hat,
  tophat,
  billed_hat,
  rescue_worker_helmet,
  mortar_board,
  crown,
  school_satchel,
  luggage,
  pouch,
  purse,
  handbag,
  briefcase,
  eyeglasses,
  dark_sunglasses,
  goggles,
  ring,
  closed_umbrella,
  dog,
  cat,
  mouse,
  hamster,
  rabbit,
  fox_face,
  bear,
  panda_face,
  koala,
  tiger,
  lion,
  cow,
  pig,
  pig_nose,
  frog,
  squid,
  octopus,
  shrimp,
  monkey_face,
  gorilla,
  see_no_evil,
  hear_no_evil,
  speak_no_evil,
  monkey,
  chicken,
  penguin,
  bird,
  baby_chick,
  hatching_chick,
  hatched_chick,
  duck,
  eagle,
  owl,
  bat,
  wolf,
  boar,
  horse,
  unicorn,
  honeybee,
  bug,
  butterfly,
  snail,
  beetle,
  ant,
  grasshopper,
  spider,
  scorpion,
  crab,
  snake,
  lizard,
  "t-rex": {
    keywords: [
      "animal",
      "nature",
      "dinosaur",
      "tyrannosaurus",
      "extinct"
    ],
    char: "🦖",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  },
  sauropod,
  turtle,
  tropical_fish,
  fish,
  blowfish,
  dolphin,
  shark,
  whale,
  whale2,
  crocodile,
  leopard,
  zebra,
  tiger2,
  water_buffalo,
  ox,
  cow2,
  deer,
  dromedary_camel,
  camel,
  giraffe,
  elephant,
  rhinoceros,
  goat,
  ram,
  sheep,
  racehorse,
  pig2,
  rat,
  mouse2,
  rooster,
  turkey,
  dove,
  dog2,
  poodle,
  cat2,
  rabbit2,
  chipmunk,
  hedgehog,
  raccoon,
  llama,
  hippopotamus,
  kangaroo,
  badger,
  swan,
  peacock,
  parrot,
  lobster,
  mosquito,
  paw_prints,
  dragon,
  dragon_face,
  cactus,
  christmas_tree,
  evergreen_tree,
  deciduous_tree,
  palm_tree,
  seedling,
  herb,
  shamrock,
  four_leaf_clover,
  bamboo,
  tanabata_tree,
  leaves,
  fallen_leaf,
  maple_leaf,
  ear_of_rice,
  hibiscus,
  sunflower,
  rose,
  wilted_flower,
  tulip,
  blossom,
  cherry_blossom,
  bouquet,
  mushroom,
  chestnut,
  jack_o_lantern,
  shell,
  spider_web,
  earth_americas,
  earth_africa,
  earth_asia,
  full_moon,
  waning_gibbous_moon,
  last_quarter_moon,
  waning_crescent_moon,
  new_moon,
  waxing_crescent_moon,
  first_quarter_moon,
  waxing_gibbous_moon,
  new_moon_with_face,
  full_moon_with_face,
  first_quarter_moon_with_face,
  last_quarter_moon_with_face,
  sun_with_face,
  crescent_moon,
  star,
  star2,
  dizzy,
  sparkles,
  comet,
  sunny,
  sun_behind_small_cloud,
  partly_sunny,
  sun_behind_large_cloud,
  sun_behind_rain_cloud,
  cloud,
  cloud_with_rain,
  cloud_with_lightning_and_rain,
  cloud_with_lightning,
  zap,
  fire,
  boom,
  snowflake,
  cloud_with_snow,
  snowman,
  snowman_with_snow,
  wind_face,
  dash,
  tornado,
  fog,
  open_umbrella,
  umbrella,
  droplet,
  sweat_drops,
  ocean,
  green_apple,
  apple,
  pear,
  tangerine,
  lemon,
  banana,
  watermelon,
  grapes,
  strawberry,
  melon,
  cherries,
  peach,
  pineapple,
  coconut,
  kiwi_fruit,
  mango,
  avocado,
  broccoli,
  tomato,
  eggplant,
  cucumber,
  carrot,
  hot_pepper,
  potato,
  corn,
  leafy_greens,
  sweet_potato,
  peanuts,
  honey_pot,
  croissant,
  bread,
  baguette_bread,
  bagel,
  pretzel,
  cheese,
  egg,
  bacon,
  steak,
  pancakes,
  poultry_leg,
  meat_on_bone,
  bone,
  fried_shrimp,
  fried_egg,
  hamburger,
  fries,
  stuffed_flatbread,
  hotdog,
  pizza,
  sandwich,
  canned_food,
  spaghetti,
  taco,
  burrito,
  green_salad,
  shallow_pan_of_food,
  ramen,
  stew,
  fish_cake,
  fortune_cookie,
  sushi,
  bento,
  curry,
  rice_ball,
  rice,
  rice_cracker,
  oden,
  dango,
  shaved_ice,
  ice_cream,
  icecream,
  pie,
  cake,
  cupcake,
  moon_cake,
  birthday,
  custard,
  candy,
  lollipop,
  chocolate_bar,
  popcorn,
  dumpling,
  doughnut,
  cookie,
  milk_glass,
  beer,
  beers,
  clinking_glasses,
  wine_glass,
  tumbler_glass,
  cocktail,
  tropical_drink,
  champagne,
  sake,
  tea,
  cup_with_straw,
  coffee,
  baby_bottle,
  salt,
  spoon,
  fork_and_knife,
  plate_with_cutlery,
  bowl_with_spoon,
  takeout_box,
  chopsticks,
  soccer,
  basketball,
  football,
  baseball,
  softball,
  tennis,
  volleyball,
  rugby_football,
  flying_disc,
  "8ball": {
    keywords: [
      "pool",
      "hobby",
      "game",
      "luck",
      "magic"
    ],
    char: "🎱",
    fitzpatrick_scale: false,
    category: "activity"
  },
  golf,
  golfing_woman,
  golfing_man,
  ping_pong,
  badminton,
  goal_net,
  ice_hockey,
  field_hockey,
  lacrosse,
  cricket,
  ski,
  skier,
  snowboarder,
  person_fencing,
  women_wrestling,
  men_wrestling,
  woman_cartwheeling,
  man_cartwheeling,
  woman_playing_handball,
  man_playing_handball,
  ice_skate,
  curling_stone,
  skateboard,
  sled,
  bow_and_arrow,
  fishing_pole_and_fish,
  boxing_glove,
  martial_arts_uniform,
  rowing_woman,
  rowing_man,
  climbing_woman,
  climbing_man,
  swimming_woman,
  swimming_man,
  woman_playing_water_polo,
  man_playing_water_polo,
  woman_in_lotus_position,
  man_in_lotus_position,
  surfing_woman,
  surfing_man,
  bath,
  basketball_woman,
  basketball_man,
  weight_lifting_woman,
  weight_lifting_man,
  biking_woman,
  biking_man,
  mountain_biking_woman,
  mountain_biking_man,
  horse_racing,
  business_suit_levitating,
  trophy,
  running_shirt_with_sash,
  medal_sports,
  medal_military,
  "1st_place_medal": {
    keywords: [
      "award",
      "winning",
      "first"
    ],
    char: "🥇",
    fitzpatrick_scale: false,
    category: "activity"
  },
  "2nd_place_medal": {
    keywords: [
      "award",
      "second"
    ],
    char: "🥈",
    fitzpatrick_scale: false,
    category: "activity"
  },
  "3rd_place_medal": {
    keywords: [
      "award",
      "third"
    ],
    char: "🥉",
    fitzpatrick_scale: false,
    category: "activity"
  },
  reminder_ribbon,
  rosette,
  ticket,
  tickets,
  performing_arts,
  art,
  circus_tent,
  woman_juggling,
  man_juggling,
  microphone,
  headphones,
  musical_score,
  musical_keyboard,
  drum,
  saxophone,
  trumpet,
  guitar,
  violin,
  clapper,
  video_game,
  space_invader,
  dart,
  game_die,
  chess_pawn,
  slot_machine,
  jigsaw,
  bowling,
  red_car,
  taxi,
  blue_car,
  bus,
  trolleybus,
  racing_car,
  police_car,
  ambulance,
  fire_engine,
  minibus,
  truck,
  articulated_lorry,
  tractor,
  kick_scooter,
  motorcycle,
  bike,
  motor_scooter,
  rotating_light,
  oncoming_police_car,
  oncoming_bus,
  oncoming_automobile,
  oncoming_taxi,
  aerial_tramway,
  mountain_cableway,
  suspension_railway,
  railway_car,
  train,
  monorail,
  bullettrain_side,
  bullettrain_front,
  light_rail,
  mountain_railway,
  steam_locomotive,
  train2,
  metro,
  tram,
  station,
  flying_saucer,
  helicopter,
  small_airplane,
  airplane,
  flight_departure,
  flight_arrival,
  sailboat,
  motor_boat,
  speedboat,
  ferry,
  passenger_ship,
  rocket,
  artificial_satellite,
  seat,
  canoe,
  anchor,
  construction,
  fuelpump,
  busstop,
  vertical_traffic_light,
  traffic_light,
  checkered_flag,
  ship,
  ferris_wheel,
  roller_coaster,
  carousel_horse,
  building_construction,
  foggy,
  tokyo_tower,
  factory,
  fountain,
  rice_scene,
  mountain,
  mountain_snow,
  mount_fuji,
  volcano,
  japan,
  camping,
  tent,
  national_park,
  motorway,
  railway_track,
  sunrise,
  sunrise_over_mountains,
  desert,
  beach_umbrella,
  desert_island,
  city_sunrise,
  city_sunset,
  cityscape,
  night_with_stars,
  bridge_at_night,
  milky_way,
  stars,
  sparkler,
  fireworks,
  rainbow,
  houses,
  european_castle,
  japanese_castle,
  stadium,
  statue_of_liberty,
  house,
  house_with_garden,
  derelict_house,
  office,
  department_store,
  post_office,
  european_post_office,
  hospital,
  bank,
  hotel,
  convenience_store,
  school,
  love_hotel,
  wedding,
  classical_building,
  church,
  mosque,
  synagogue,
  kaaba,
  shinto_shrine,
  watch,
  iphone,
  calling,
  computer,
  keyboard,
  desktop_computer,
  printer,
  computer_mouse,
  trackball,
  joystick,
  clamp,
  minidisc,
  floppy_disk,
  cd,
  dvd,
  vhs,
  camera,
  camera_flash,
  video_camera,
  movie_camera,
  film_projector,
  film_strip,
  telephone_receiver,
  phone,
  pager,
  fax,
  tv,
  radio,
  studio_microphone,
  level_slider,
  control_knobs,
  compass,
  stopwatch,
  timer_clock,
  alarm_clock,
  mantelpiece_clock,
  hourglass_flowing_sand,
  hourglass,
  satellite,
  battery,
  electric_plug,
  bulb,
  flashlight,
  candle,
  fire_extinguisher,
  wastebasket,
  oil_drum,
  money_with_wings,
  dollar,
  yen,
  euro,
  pound,
  moneybag,
  credit_card,
  gem,
  balance_scale,
  toolbox,
  wrench,
  hammer,
  hammer_and_pick,
  hammer_and_wrench,
  pick,
  nut_and_bolt,
  gear,
  brick,
  chains,
  magnet,
  gun,
  bomb,
  firecracker,
  hocho,
  dagger,
  crossed_swords,
  shield,
  smoking,
  skull_and_crossbones,
  coffin,
  funeral_urn,
  amphora,
  crystal_ball,
  prayer_beads,
  nazar_amulet,
  barber,
  alembic,
  telescope,
  microscope,
  hole,
  pill,
  syringe,
  dna,
  microbe,
  petri_dish,
  test_tube,
  thermometer,
  broom,
  basket,
  toilet_paper,
  label,
  bookmark,
  toilet,
  shower,
  bathtub,
  soap,
  sponge,
  lotion_bottle,
  key,
  old_key,
  couch_and_lamp,
  sleeping_bed,
  bed,
  door,
  bellhop_bell,
  teddy_bear,
  framed_picture,
  world_map,
  parasol_on_ground,
  moyai,
  shopping,
  shopping_cart,
  balloon,
  flags,
  ribbon,
  gift,
  confetti_ball,
  tada,
  dolls,
  wind_chime,
  crossed_flags,
  izakaya_lantern,
  red_envelope,
  email,
  envelope_with_arrow,
  incoming_envelope,
  "e-mail": {
    keywords: [
      "communication",
      "inbox"
    ],
    char: "📧",
    fitzpatrick_scale: false,
    category: "objects"
  },
  love_letter,
  postbox,
  mailbox_closed,
  mailbox,
  mailbox_with_mail,
  mailbox_with_no_mail,
  "package": {
    keywords: [
      "mail",
      "gift",
      "cardboard",
      "box",
      "moving"
    ],
    char: "📦",
    fitzpatrick_scale: false,
    category: "objects"
  },
  postal_horn,
  inbox_tray,
  outbox_tray,
  scroll,
  page_with_curl,
  bookmark_tabs,
  receipt,
  bar_chart,
  chart_with_upwards_trend,
  chart_with_downwards_trend,
  page_facing_up,
  date,
  calendar,
  spiral_calendar,
  card_index,
  card_file_box,
  ballot_box,
  file_cabinet,
  clipboard,
  spiral_notepad,
  file_folder,
  open_file_folder,
  card_index_dividers,
  newspaper_roll,
  newspaper,
  notebook,
  closed_book,
  green_book,
  blue_book,
  orange_book,
  notebook_with_decorative_cover,
  ledger,
  books,
  open_book,
  safety_pin,
  link,
  paperclip,
  paperclips,
  scissors,
  triangular_ruler,
  straight_ruler,
  abacus,
  pushpin,
  round_pushpin,
  triangular_flag_on_post,
  white_flag,
  black_flag,
  rainbow_flag,
  closed_lock_with_key,
  lock,
  unlock,
  lock_with_ink_pen,
  pen,
  fountain_pen,
  black_nib,
  memo,
  pencil2,
  crayon,
  paintbrush,
  mag,
  mag_right,
  heart,
  orange_heart,
  yellow_heart,
  green_heart,
  blue_heart,
  purple_heart,
  black_heart,
  broken_heart,
  heavy_heart_exclamation,
  two_hearts,
  revolving_hearts,
  heartbeat,
  heartpulse,
  sparkling_heart,
  cupid,
  gift_heart,
  heart_decoration,
  peace_symbol,
  latin_cross,
  star_and_crescent,
  om,
  wheel_of_dharma,
  star_of_david,
  six_pointed_star,
  menorah,
  yin_yang,
  orthodox_cross,
  place_of_worship,
  ophiuchus,
  aries,
  taurus,
  gemini,
  cancer,
  leo,
  virgo,
  libra,
  scorpius,
  sagittarius,
  capricorn,
  aquarius,
  pisces,
  id,
  atom_symbol,
  u7a7a,
  u5272,
  radioactive,
  biohazard,
  mobile_phone_off,
  vibration_mode,
  u6709,
  u7121,
  u7533,
  u55b6,
  u6708,
  eight_pointed_black_star,
  vs,
  accept,
  white_flower,
  ideograph_advantage,
  secret,
  congratulations,
  u5408,
  u6e80,
  u7981,
  a,
  b,
  ab,
  cl,
  o2,
  sos,
  no_entry,
  name_badge,
  no_entry_sign,
  x,
  o,
  stop_sign,
  anger,
  hotsprings,
  no_pedestrians,
  do_not_litter,
  no_bicycles,
  "non-potable_water": {
    keywords: [
      "drink",
      "faucet",
      "tap",
      "circle"
    ],
    char: "🚱",
    fitzpatrick_scale: false,
    category: "symbols"
  },
  underage,
  no_mobile_phones,
  exclamation,
  grey_exclamation,
  question,
  grey_question,
  bangbang,
  interrobang,
  low_brightness,
  high_brightness,
  trident,
  fleur_de_lis,
  part_alternation_mark,
  warning,
  children_crossing,
  beginner,
  recycle,
  u6307,
  chart,
  sparkle,
  eight_spoked_asterisk,
  negative_squared_cross_mark,
  white_check_mark,
  diamond_shape_with_a_dot_inside,
  cyclone,
  loop,
  globe_with_meridians,
  m,
  atm,
  sa,
  passport_control,
  customs,
  baggage_claim,
  left_luggage,
  wheelchair,
  no_smoking,
  wc,
  parking,
  potable_water,
  mens,
  womens,
  baby_symbol,
  restroom,
  put_litter_in_its_place,
  cinema,
  signal_strength,
  koko,
  ng,
  ok,
  up,
  cool,
  "new": {
    keywords: [
      "blue-square",
      "words",
      "start"
    ],
    char: "🆕",
    fitzpatrick_scale: false,
    category: "symbols"
  },
  free,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  keycap_ten,
  asterisk,
  eject_button,
  arrow_forward,
  pause_button,
  next_track_button,
  stop_button,
  record_button,
  play_or_pause_button,
  previous_track_button,
  fast_forward,
  rewind,
  twisted_rightwards_arrows,
  repeat,
  repeat_one,
  arrow_backward,
  arrow_up_small,
  arrow_down_small,
  arrow_double_up,
  arrow_double_down,
  arrow_right,
  arrow_left,
  arrow_up,
  arrow_down,
  arrow_upper_right,
  arrow_lower_right,
  arrow_lower_left,
  arrow_upper_left,
  arrow_up_down,
  left_right_arrow,
  arrows_counterclockwise,
  arrow_right_hook,
  leftwards_arrow_with_hook,
  arrow_heading_up,
  arrow_heading_down,
  hash,
  information_source,
  abc,
  abcd,
  capital_abcd,
  symbols,
  musical_note,
  notes,
  wavy_dash,
  curly_loop,
  heavy_check_mark,
  arrows_clockwise,
  heavy_plus_sign,
  heavy_minus_sign,
  heavy_division_sign,
  heavy_multiplication_x,
  infinity,
  heavy_dollar_sign,
  currency_exchange,
  copyright,
  registered,
  tm,
  end,
  back,
  on,
  top,
  soon,
  ballot_box_with_check,
  radio_button,
  white_circle,
  black_circle,
  red_circle,
  large_blue_circle,
  small_orange_diamond,
  small_blue_diamond,
  large_orange_diamond,
  large_blue_diamond,
  small_red_triangle,
  black_small_square,
  white_small_square,
  black_large_square,
  white_large_square,
  small_red_triangle_down,
  black_medium_square,
  white_medium_square,
  black_medium_small_square,
  white_medium_small_square,
  black_square_button,
  white_square_button,
  speaker,
  sound,
  loud_sound,
  mute,
  mega,
  loudspeaker,
  bell,
  no_bell,
  black_joker,
  mahjong,
  spades,
  clubs,
  hearts,
  diamonds,
  flower_playing_cards,
  thought_balloon,
  right_anger_bubble,
  speech_balloon,
  left_speech_bubble,
  clock1,
  clock2,
  clock3,
  clock4,
  clock5,
  clock6,
  clock7,
  clock8,
  clock9,
  clock10,
  clock11,
  clock12,
  clock130,
  clock230,
  clock330,
  clock430,
  clock530,
  clock630,
  clock730,
  clock830,
  clock930,
  clock1030,
  clock1130,
  clock1230,
  afghanistan,
  aland_islands,
  albania,
  algeria,
  american_samoa,
  andorra,
  angola,
  anguilla,
  antarctica,
  antigua_barbuda,
  argentina,
  armenia,
  aruba,
  australia,
  austria,
  azerbaijan,
  bahamas,
  bahrain,
  bangladesh,
  barbados,
  belarus,
  belgium,
  belize,
  benin,
  bermuda,
  bhutan,
  bolivia,
  caribbean_netherlands,
  bosnia_herzegovina,
  botswana,
  brazil,
  british_indian_ocean_territory,
  british_virgin_islands,
  brunei,
  bulgaria,
  burkina_faso,
  burundi,
  cape_verde,
  cambodia,
  cameroon,
  canada,
  canary_islands,
  cayman_islands,
  central_african_republic,
  chad,
  chile,
  cn,
  christmas_island,
  cocos_islands,
  colombia,
  comoros,
  congo_brazzaville,
  congo_kinshasa,
  cook_islands,
  costa_rica,
  croatia,
  cuba,
  curacao,
  cyprus,
  czech_republic,
  denmark,
  djibouti,
  dominica,
  dominican_republic,
  ecuador,
  egypt,
  el_salvador,
  equatorial_guinea,
  eritrea,
  estonia,
  ethiopia,
  eu,
  falkland_islands,
  faroe_islands,
  fiji,
  finland,
  fr,
  french_guiana,
  french_polynesia,
  french_southern_territories,
  gabon,
  gambia,
  georgia,
  de,
  ghana,
  gibraltar,
  greece,
  greenland,
  grenada,
  guadeloupe,
  guam,
  guatemala,
  guernsey,
  guinea,
  guinea_bissau,
  guyana,
  haiti,
  honduras,
  hong_kong,
  hungary,
  iceland,
  india,
  indonesia,
  iran,
  iraq,
  ireland,
  isle_of_man,
  israel,
  it,
  cote_divoire,
  jamaica,
  jp,
  jersey,
  jordan,
  kazakhstan,
  kenya,
  kiribati,
  kosovo,
  kuwait,
  kyrgyzstan,
  laos,
  latvia,
  lebanon,
  lesotho,
  liberia,
  libya,
  liechtenstein,
  lithuania,
  luxembourg,
  macau,
  macedonia,
  madagascar,
  malawi,
  malaysia,
  maldives,
  mali,
  malta,
  marshall_islands,
  martinique,
  mauritania,
  mauritius,
  mayotte,
  mexico,
  micronesia,
  moldova,
  monaco,
  mongolia,
  montenegro,
  montserrat,
  morocco,
  mozambique,
  myanmar,
  namibia,
  nauru,
  nepal,
  netherlands,
  new_caledonia,
  new_zealand,
  nicaragua,
  niger,
  nigeria,
  niue,
  norfolk_island,
  northern_mariana_islands,
  north_korea,
  norway,
  oman,
  pakistan,
  palau,
  palestinian_territories,
  panama,
  papua_new_guinea,
  paraguay,
  peru,
  philippines,
  pitcairn_islands,
  poland,
  portugal,
  puerto_rico,
  qatar,
  reunion,
  romania,
  ru,
  rwanda,
  st_barthelemy,
  st_helena,
  st_kitts_nevis,
  st_lucia,
  st_pierre_miquelon,
  st_vincent_grenadines,
  samoa,
  san_marino,
  sao_tome_principe,
  saudi_arabia,
  senegal,
  serbia,
  seychelles,
  sierra_leone,
  singapore,
  sint_maarten,
  slovakia,
  slovenia,
  solomon_islands,
  somalia,
  south_africa,
  south_georgia_south_sandwich_islands,
  kr,
  south_sudan,
  es,
  sri_lanka,
  sudan,
  suriname,
  swaziland,
  sweden,
  switzerland,
  syria,
  taiwan,
  tajikistan,
  tanzania,
  thailand,
  timor_leste,
  togo,
  tokelau,
  tonga,
  trinidad_tobago,
  tunisia,
  tr,
  turkmenistan,
  turks_caicos_islands,
  tuvalu,
  uganda,
  ukraine,
  united_arab_emirates,
  uk,
  england,
  scotland,
  wales,
  us,
  us_virgin_islands,
  uruguay,
  uzbekistan,
  vanuatu,
  vatican_city,
  venezuela,
  vietnam,
  wallis_futuna,
  western_sahara,
  yemen,
  zambia,
  zimbabwe,
  united_nations,
  pirate_flag
};
const require$$1 = [
  "grinning",
  "smiley",
  "smile",
  "grin",
  "laughing",
  "sweat_smile",
  "joy",
  "rofl",
  "relaxed",
  "blush",
  "innocent",
  "slightly_smiling_face",
  "upside_down_face",
  "wink",
  "relieved",
  "heart_eyes",
  "smiling_face_with_three_hearts",
  "kissing_heart",
  "kissing",
  "kissing_smiling_eyes",
  "kissing_closed_eyes",
  "yum",
  "stuck_out_tongue",
  "stuck_out_tongue_closed_eyes",
  "stuck_out_tongue_winking_eye",
  "zany",
  "raised_eyebrow",
  "monocle",
  "nerd_face",
  "sunglasses",
  "star_struck",
  "partying",
  "smirk",
  "unamused",
  "disappointed",
  "pensive",
  "worried",
  "confused",
  "slightly_frowning_face",
  "frowning_face",
  "persevere",
  "confounded",
  "tired_face",
  "weary",
  "pleading",
  "cry",
  "sob",
  "triumph",
  "angry",
  "rage",
  "symbols_over_mouth",
  "exploding_head",
  "flushed",
  "hot",
  "cold",
  "scream",
  "fearful",
  "cold_sweat",
  "disappointed_relieved",
  "sweat",
  "hugs",
  "thinking",
  "hand_over_mouth",
  "shushing",
  "lying_face",
  "no_mouth",
  "neutral_face",
  "expressionless",
  "grimacing",
  "roll_eyes",
  "hushed",
  "frowning",
  "anguished",
  "open_mouth",
  "astonished",
  "sleeping",
  "drooling_face",
  "sleepy",
  "dizzy_face",
  "zipper_mouth_face",
  "woozy",
  "nauseated_face",
  "vomiting",
  "sneezing_face",
  "mask",
  "face_with_thermometer",
  "face_with_head_bandage",
  "money_mouth_face",
  "cowboy_hat_face",
  "smiling_imp",
  "imp",
  "japanese_ogre",
  "japanese_goblin",
  "clown_face",
  "poop",
  "ghost",
  "skull",
  "skull_and_crossbones",
  "alien",
  "space_invader",
  "robot",
  "jack_o_lantern",
  "smiley_cat",
  "smile_cat",
  "joy_cat",
  "heart_eyes_cat",
  "smirk_cat",
  "kissing_cat",
  "scream_cat",
  "crying_cat_face",
  "pouting_cat",
  "palms_up",
  "open_hands",
  "raised_hands",
  "clap",
  "handshake",
  "+1",
  "-1",
  "facepunch",
  "fist",
  "fist_left",
  "fist_right",
  "crossed_fingers",
  "v",
  "love_you",
  "metal",
  "ok_hand",
  "point_left",
  "point_right",
  "point_up",
  "point_down",
  "point_up_2",
  "raised_hand",
  "raised_back_of_hand",
  "raised_hand_with_fingers_splayed",
  "vulcan_salute",
  "wave",
  "call_me_hand",
  "muscle",
  "fu",
  "writing_hand",
  "pray",
  "foot",
  "leg",
  "ring",
  "lipstick",
  "kiss",
  "lips",
  "tooth",
  "tongue",
  "ear",
  "nose",
  "footprints",
  "eye",
  "eyes",
  "brain",
  "speaking_head",
  "bust_in_silhouette",
  "busts_in_silhouette",
  "baby",
  "girl",
  "child",
  "boy",
  "woman",
  "adult",
  "man",
  "blonde_woman",
  "blonde_man",
  "bearded_person",
  "older_woman",
  "older_adult",
  "older_man",
  "man_with_gua_pi_mao",
  "woman_with_headscarf",
  "woman_with_turban",
  "man_with_turban",
  "policewoman",
  "policeman",
  "construction_worker_woman",
  "construction_worker_man",
  "guardswoman",
  "guardsman",
  "female_detective",
  "male_detective",
  "woman_health_worker",
  "man_health_worker",
  "woman_farmer",
  "man_farmer",
  "woman_cook",
  "man_cook",
  "woman_student",
  "man_student",
  "woman_singer",
  "man_singer",
  "woman_teacher",
  "man_teacher",
  "woman_factory_worker",
  "man_factory_worker",
  "woman_technologist",
  "man_technologist",
  "woman_office_worker",
  "man_office_worker",
  "woman_mechanic",
  "man_mechanic",
  "woman_scientist",
  "man_scientist",
  "woman_artist",
  "man_artist",
  "woman_firefighter",
  "man_firefighter",
  "woman_pilot",
  "man_pilot",
  "woman_astronaut",
  "man_astronaut",
  "woman_judge",
  "man_judge",
  "bride_with_veil",
  "man_in_tuxedo",
  "princess",
  "prince",
  "woman_superhero",
  "man_superhero",
  "woman_supervillain",
  "man_supervillain",
  "mrs_claus",
  "santa",
  "sorceress",
  "wizard",
  "woman_elf",
  "man_elf",
  "woman_vampire",
  "man_vampire",
  "woman_zombie",
  "man_zombie",
  "woman_genie",
  "man_genie",
  "mermaid",
  "merman",
  "woman_fairy",
  "man_fairy",
  "angel",
  "pregnant_woman",
  "breastfeeding",
  "bowing_woman",
  "bowing_man",
  "tipping_hand_woman",
  "tipping_hand_man",
  "no_good_woman",
  "no_good_man",
  "ok_woman",
  "ok_man",
  "raising_hand_woman",
  "raising_hand_man",
  "woman_facepalming",
  "man_facepalming",
  "woman_shrugging",
  "man_shrugging",
  "pouting_woman",
  "pouting_man",
  "frowning_woman",
  "frowning_man",
  "haircut_woman",
  "haircut_man",
  "massage_woman",
  "massage_man",
  "woman_in_steamy_room",
  "man_in_steamy_room",
  "nail_care",
  "selfie",
  "dancer",
  "man_dancing",
  "dancing_women",
  "dancing_men",
  "business_suit_levitating",
  "walking_woman",
  "walking_man",
  "running_woman",
  "running_man",
  "couple",
  "two_women_holding_hands",
  "two_men_holding_hands",
  "couple_with_heart_woman_man",
  "couple_with_heart_woman_woman",
  "couple_with_heart_man_man",
  "couplekiss_man_woman",
  "couplekiss_woman_woman",
  "couplekiss_man_man",
  "family_man_woman_boy",
  "family_man_woman_girl",
  "family_man_woman_girl_boy",
  "family_man_woman_boy_boy",
  "family_man_woman_girl_girl",
  "family_woman_woman_boy",
  "family_woman_woman_girl",
  "family_woman_woman_girl_boy",
  "family_woman_woman_boy_boy",
  "family_woman_woman_girl_girl",
  "family_man_man_boy",
  "family_man_man_girl",
  "family_man_man_girl_boy",
  "family_man_man_boy_boy",
  "family_man_man_girl_girl",
  "family_woman_boy",
  "family_woman_girl",
  "family_woman_girl_boy",
  "family_woman_boy_boy",
  "family_woman_girl_girl",
  "family_man_boy",
  "family_man_girl",
  "family_man_girl_boy",
  "family_man_boy_boy",
  "family_man_girl_girl",
  "yarn",
  "thread",
  "coat",
  "labcoat",
  "womans_clothes",
  "tshirt",
  "jeans",
  "necktie",
  "dress",
  "bikini",
  "kimono",
  "flat_shoe",
  "high_heel",
  "sandal",
  "boot",
  "mans_shoe",
  "athletic_shoe",
  "hiking_boot",
  "socks",
  "gloves",
  "scarf",
  "tophat",
  "billed_hat",
  "womans_hat",
  "mortar_board",
  "rescue_worker_helmet",
  "crown",
  "pouch",
  "purse",
  "handbag",
  "briefcase",
  "school_satchel",
  "luggage",
  "eyeglasses",
  "dark_sunglasses",
  "goggles",
  "closed_umbrella",
  "dog",
  "cat",
  "mouse",
  "hamster",
  "rabbit",
  "fox_face",
  "bear",
  "panda_face",
  "koala",
  "tiger",
  "lion",
  "cow",
  "pig",
  "pig_nose",
  "frog",
  "monkey_face",
  "see_no_evil",
  "hear_no_evil",
  "speak_no_evil",
  "monkey",
  "chicken",
  "penguin",
  "bird",
  "baby_chick",
  "hatching_chick",
  "hatched_chick",
  "duck",
  "eagle",
  "owl",
  "bat",
  "wolf",
  "boar",
  "horse",
  "unicorn",
  "honeybee",
  "bug",
  "butterfly",
  "snail",
  "shell",
  "beetle",
  "ant",
  "mosquito",
  "grasshopper",
  "spider",
  "spider_web",
  "scorpion",
  "turtle",
  "snake",
  "lizard",
  "t-rex",
  "sauropod",
  "octopus",
  "squid",
  "shrimp",
  "lobster",
  "crab",
  "blowfish",
  "tropical_fish",
  "fish",
  "dolphin",
  "whale",
  "whale2",
  "shark",
  "crocodile",
  "tiger2",
  "leopard",
  "zebra",
  "gorilla",
  "elephant",
  "hippopotamus",
  "rhinoceros",
  "dromedary_camel",
  "giraffe",
  "kangaroo",
  "camel",
  "water_buffalo",
  "ox",
  "cow2",
  "racehorse",
  "pig2",
  "ram",
  "sheep",
  "llama",
  "goat",
  "deer",
  "dog2",
  "poodle",
  "cat2",
  "rooster",
  "turkey",
  "peacock",
  "parrot",
  "swan",
  "dove",
  "rabbit2",
  "raccoon",
  "badger",
  "rat",
  "mouse2",
  "chipmunk",
  "hedgehog",
  "paw_prints",
  "dragon",
  "dragon_face",
  "cactus",
  "christmas_tree",
  "evergreen_tree",
  "deciduous_tree",
  "palm_tree",
  "seedling",
  "herb",
  "shamrock",
  "four_leaf_clover",
  "bamboo",
  "tanabata_tree",
  "leaves",
  "fallen_leaf",
  "maple_leaf",
  "ear_of_rice",
  "hibiscus",
  "sunflower",
  "rose",
  "wilted_flower",
  "tulip",
  "blossom",
  "cherry_blossom",
  "bouquet",
  "mushroom",
  "earth_americas",
  "earth_africa",
  "earth_asia",
  "full_moon",
  "waning_gibbous_moon",
  "last_quarter_moon",
  "waning_crescent_moon",
  "new_moon",
  "waxing_crescent_moon",
  "first_quarter_moon",
  "waxing_gibbous_moon",
  "new_moon_with_face",
  "full_moon_with_face",
  "first_quarter_moon_with_face",
  "last_quarter_moon_with_face",
  "sun_with_face",
  "crescent_moon",
  "star",
  "star2",
  "dizzy",
  "sparkles",
  "comet",
  "sunny",
  "sun_behind_small_cloud",
  "partly_sunny",
  "sun_behind_large_cloud",
  "sun_behind_rain_cloud",
  "cloud",
  "cloud_with_rain",
  "cloud_with_lightning_and_rain",
  "cloud_with_lightning",
  "zap",
  "fire",
  "boom",
  "snowflake",
  "cloud_with_snow",
  "snowman",
  "snowman_with_snow",
  "wind_face",
  "dash",
  "tornado",
  "fog",
  "open_umbrella",
  "umbrella",
  "droplet",
  "sweat_drops",
  "ocean",
  "green_apple",
  "apple",
  "pear",
  "tangerine",
  "lemon",
  "banana",
  "watermelon",
  "grapes",
  "strawberry",
  "melon",
  "cherries",
  "peach",
  "mango",
  "pineapple",
  "coconut",
  "kiwi_fruit",
  "tomato",
  "eggplant",
  "avocado",
  "broccoli",
  "leafy_greens",
  "cucumber",
  "hot_pepper",
  "corn",
  "carrot",
  "potato",
  "sweet_potato",
  "croissant",
  "bagel",
  "bread",
  "baguette_bread",
  "pretzel",
  "cheese",
  "egg",
  "fried_egg",
  "pancakes",
  "bacon",
  "steak",
  "poultry_leg",
  "meat_on_bone",
  "bone",
  "hotdog",
  "hamburger",
  "fries",
  "pizza",
  "sandwich",
  "stuffed_flatbread",
  "taco",
  "burrito",
  "green_salad",
  "shallow_pan_of_food",
  "canned_food",
  "spaghetti",
  "ramen",
  "stew",
  "curry",
  "sushi",
  "bento",
  "fried_shrimp",
  "rice_ball",
  "rice",
  "rice_cracker",
  "fish_cake",
  "fortune_cookie",
  "moon_cake",
  "oden",
  "dango",
  "shaved_ice",
  "ice_cream",
  "icecream",
  "pie",
  "cupcake",
  "cake",
  "birthday",
  "custard",
  "lollipop",
  "candy",
  "chocolate_bar",
  "popcorn",
  "doughnut",
  "dumpling",
  "cookie",
  "chestnut",
  "peanuts",
  "honey_pot",
  "milk_glass",
  "baby_bottle",
  "coffee",
  "tea",
  "cup_with_straw",
  "sake",
  "beer",
  "beers",
  "clinking_glasses",
  "wine_glass",
  "tumbler_glass",
  "cocktail",
  "tropical_drink",
  "champagne",
  "spoon",
  "fork_and_knife",
  "plate_with_cutlery",
  "bowl_with_spoon",
  "takeout_box",
  "chopsticks",
  "salt",
  "soccer",
  "basketball",
  "football",
  "baseball",
  "softball",
  "tennis",
  "volleyball",
  "rugby_football",
  "flying_disc",
  "8ball",
  "golf",
  "golfing_woman",
  "golfing_man",
  "ping_pong",
  "badminton",
  "goal_net",
  "ice_hockey",
  "field_hockey",
  "lacrosse",
  "cricket",
  "ski",
  "skier",
  "snowboarder",
  "person_fencing",
  "women_wrestling",
  "men_wrestling",
  "woman_cartwheeling",
  "man_cartwheeling",
  "woman_playing_handball",
  "man_playing_handball",
  "ice_skate",
  "curling_stone",
  "skateboard",
  "sled",
  "bow_and_arrow",
  "fishing_pole_and_fish",
  "boxing_glove",
  "martial_arts_uniform",
  "rowing_woman",
  "rowing_man",
  "climbing_woman",
  "climbing_man",
  "swimming_woman",
  "swimming_man",
  "woman_playing_water_polo",
  "man_playing_water_polo",
  "woman_in_lotus_position",
  "man_in_lotus_position",
  "surfing_woman",
  "surfing_man",
  "basketball_woman",
  "basketball_man",
  "weight_lifting_woman",
  "weight_lifting_man",
  "biking_woman",
  "biking_man",
  "mountain_biking_woman",
  "mountain_biking_man",
  "horse_racing",
  "trophy",
  "running_shirt_with_sash",
  "medal_sports",
  "medal_military",
  "1st_place_medal",
  "2nd_place_medal",
  "3rd_place_medal",
  "reminder_ribbon",
  "rosette",
  "ticket",
  "tickets",
  "performing_arts",
  "art",
  "circus_tent",
  "woman_juggling",
  "man_juggling",
  "microphone",
  "headphones",
  "musical_score",
  "musical_keyboard",
  "drum",
  "saxophone",
  "trumpet",
  "guitar",
  "violin",
  "clapper",
  "video_game",
  "dart",
  "game_die",
  "chess_pawn",
  "slot_machine",
  "jigsaw",
  "bowling",
  "red_car",
  "taxi",
  "blue_car",
  "bus",
  "trolleybus",
  "racing_car",
  "police_car",
  "ambulance",
  "fire_engine",
  "minibus",
  "truck",
  "articulated_lorry",
  "tractor",
  "kick_scooter",
  "motorcycle",
  "bike",
  "motor_scooter",
  "rotating_light",
  "oncoming_police_car",
  "oncoming_bus",
  "oncoming_automobile",
  "oncoming_taxi",
  "aerial_tramway",
  "mountain_cableway",
  "suspension_railway",
  "railway_car",
  "train",
  "monorail",
  "bullettrain_side",
  "bullettrain_front",
  "light_rail",
  "mountain_railway",
  "steam_locomotive",
  "train2",
  "metro",
  "tram",
  "station",
  "flying_saucer",
  "helicopter",
  "small_airplane",
  "airplane",
  "flight_departure",
  "flight_arrival",
  "sailboat",
  "motor_boat",
  "speedboat",
  "ferry",
  "passenger_ship",
  "rocket",
  "artificial_satellite",
  "seat",
  "canoe",
  "anchor",
  "construction",
  "fuelpump",
  "busstop",
  "vertical_traffic_light",
  "traffic_light",
  "ship",
  "ferris_wheel",
  "roller_coaster",
  "carousel_horse",
  "building_construction",
  "foggy",
  "tokyo_tower",
  "factory",
  "fountain",
  "rice_scene",
  "mountain",
  "mountain_snow",
  "mount_fuji",
  "volcano",
  "japan",
  "camping",
  "tent",
  "national_park",
  "motorway",
  "railway_track",
  "sunrise",
  "sunrise_over_mountains",
  "desert",
  "beach_umbrella",
  "desert_island",
  "city_sunrise",
  "city_sunset",
  "cityscape",
  "night_with_stars",
  "bridge_at_night",
  "milky_way",
  "stars",
  "sparkler",
  "fireworks",
  "rainbow",
  "houses",
  "european_castle",
  "japanese_castle",
  "stadium",
  "statue_of_liberty",
  "house",
  "house_with_garden",
  "derelict_house",
  "office",
  "department_store",
  "post_office",
  "european_post_office",
  "hospital",
  "bank",
  "hotel",
  "convenience_store",
  "school",
  "love_hotel",
  "wedding",
  "classical_building",
  "church",
  "mosque",
  "synagogue",
  "kaaba",
  "shinto_shrine",
  "watch",
  "iphone",
  "calling",
  "computer",
  "keyboard",
  "desktop_computer",
  "printer",
  "computer_mouse",
  "trackball",
  "joystick",
  "clamp",
  "minidisc",
  "floppy_disk",
  "cd",
  "dvd",
  "vhs",
  "camera",
  "camera_flash",
  "video_camera",
  "movie_camera",
  "film_projector",
  "film_strip",
  "telephone_receiver",
  "phone",
  "pager",
  "fax",
  "tv",
  "radio",
  "studio_microphone",
  "level_slider",
  "control_knobs",
  "compass",
  "stopwatch",
  "timer_clock",
  "alarm_clock",
  "mantelpiece_clock",
  "hourglass_flowing_sand",
  "hourglass",
  "satellite",
  "battery",
  "electric_plug",
  "bulb",
  "flashlight",
  "candle",
  "fire_extinguisher",
  "wastebasket",
  "oil_drum",
  "money_with_wings",
  "dollar",
  "yen",
  "euro",
  "pound",
  "moneybag",
  "credit_card",
  "gem",
  "balance_scale",
  "toolbox",
  "wrench",
  "hammer",
  "hammer_and_pick",
  "hammer_and_wrench",
  "pick",
  "nut_and_bolt",
  "gear",
  "brick",
  "chains",
  "magnet",
  "gun",
  "bomb",
  "firecracker",
  "hocho",
  "dagger",
  "crossed_swords",
  "shield",
  "smoking",
  "coffin",
  "funeral_urn",
  "amphora",
  "crystal_ball",
  "prayer_beads",
  "nazar_amulet",
  "barber",
  "alembic",
  "telescope",
  "microscope",
  "hole",
  "pill",
  "syringe",
  "dna",
  "microbe",
  "petri_dish",
  "test_tube",
  "thermometer",
  "broom",
  "basket",
  "toilet_paper",
  "label",
  "bookmark",
  "toilet",
  "shower",
  "bathtub",
  "bath",
  "soap",
  "sponge",
  "lotion_bottle",
  "key",
  "old_key",
  "couch_and_lamp",
  "sleeping_bed",
  "bed",
  "door",
  "bellhop_bell",
  "teddy_bear",
  "framed_picture",
  "world_map",
  "parasol_on_ground",
  "moyai",
  "shopping",
  "shopping_cart",
  "balloon",
  "flags",
  "ribbon",
  "gift",
  "confetti_ball",
  "tada",
  "dolls",
  "wind_chime",
  "crossed_flags",
  "izakaya_lantern",
  "red_envelope",
  "email",
  "envelope_with_arrow",
  "incoming_envelope",
  "e-mail",
  "love_letter",
  "postbox",
  "mailbox_closed",
  "mailbox",
  "mailbox_with_mail",
  "mailbox_with_no_mail",
  "package",
  "postal_horn",
  "inbox_tray",
  "outbox_tray",
  "scroll",
  "page_with_curl",
  "bookmark_tabs",
  "receipt",
  "bar_chart",
  "chart_with_upwards_trend",
  "chart_with_downwards_trend",
  "page_facing_up",
  "date",
  "calendar",
  "spiral_calendar",
  "card_index",
  "card_file_box",
  "ballot_box",
  "file_cabinet",
  "clipboard",
  "spiral_notepad",
  "file_folder",
  "open_file_folder",
  "card_index_dividers",
  "newspaper_roll",
  "newspaper",
  "notebook",
  "closed_book",
  "green_book",
  "blue_book",
  "orange_book",
  "notebook_with_decorative_cover",
  "ledger",
  "books",
  "open_book",
  "safety_pin",
  "link",
  "paperclip",
  "paperclips",
  "scissors",
  "triangular_ruler",
  "straight_ruler",
  "abacus",
  "pushpin",
  "round_pushpin",
  "closed_lock_with_key",
  "lock",
  "unlock",
  "lock_with_ink_pen",
  "pen",
  "fountain_pen",
  "black_nib",
  "memo",
  "pencil2",
  "crayon",
  "paintbrush",
  "mag",
  "mag_right",
  "heart",
  "orange_heart",
  "yellow_heart",
  "green_heart",
  "blue_heart",
  "purple_heart",
  "black_heart",
  "broken_heart",
  "heavy_heart_exclamation",
  "two_hearts",
  "revolving_hearts",
  "heartbeat",
  "heartpulse",
  "sparkling_heart",
  "cupid",
  "gift_heart",
  "heart_decoration",
  "peace_symbol",
  "latin_cross",
  "star_and_crescent",
  "om",
  "wheel_of_dharma",
  "star_of_david",
  "six_pointed_star",
  "menorah",
  "yin_yang",
  "orthodox_cross",
  "place_of_worship",
  "ophiuchus",
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpius",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces",
  "id",
  "atom_symbol",
  "u7a7a",
  "u5272",
  "radioactive",
  "biohazard",
  "mobile_phone_off",
  "vibration_mode",
  "u6709",
  "u7121",
  "u7533",
  "u55b6",
  "u6708",
  "eight_pointed_black_star",
  "vs",
  "accept",
  "white_flower",
  "ideograph_advantage",
  "secret",
  "congratulations",
  "u5408",
  "u6e80",
  "u7981",
  "a",
  "b",
  "ab",
  "cl",
  "o2",
  "sos",
  "no_entry",
  "name_badge",
  "no_entry_sign",
  "x",
  "o",
  "stop_sign",
  "anger",
  "hotsprings",
  "no_pedestrians",
  "do_not_litter",
  "no_bicycles",
  "non-potable_water",
  "underage",
  "no_mobile_phones",
  "exclamation",
  "grey_exclamation",
  "question",
  "grey_question",
  "bangbang",
  "interrobang",
  "100",
  "low_brightness",
  "high_brightness",
  "trident",
  "fleur_de_lis",
  "part_alternation_mark",
  "warning",
  "children_crossing",
  "beginner",
  "recycle",
  "u6307",
  "chart",
  "sparkle",
  "eight_spoked_asterisk",
  "negative_squared_cross_mark",
  "white_check_mark",
  "diamond_shape_with_a_dot_inside",
  "cyclone",
  "loop",
  "globe_with_meridians",
  "m",
  "atm",
  "zzz",
  "sa",
  "passport_control",
  "customs",
  "baggage_claim",
  "left_luggage",
  "wheelchair",
  "no_smoking",
  "wc",
  "parking",
  "potable_water",
  "mens",
  "womens",
  "baby_symbol",
  "restroom",
  "put_litter_in_its_place",
  "cinema",
  "signal_strength",
  "koko",
  "ng",
  "ok",
  "up",
  "cool",
  "new",
  "free",
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "keycap_ten",
  "asterisk",
  "1234",
  "eject_button",
  "arrow_forward",
  "pause_button",
  "next_track_button",
  "stop_button",
  "record_button",
  "play_or_pause_button",
  "previous_track_button",
  "fast_forward",
  "rewind",
  "twisted_rightwards_arrows",
  "repeat",
  "repeat_one",
  "arrow_backward",
  "arrow_up_small",
  "arrow_down_small",
  "arrow_double_up",
  "arrow_double_down",
  "arrow_right",
  "arrow_left",
  "arrow_up",
  "arrow_down",
  "arrow_upper_right",
  "arrow_lower_right",
  "arrow_lower_left",
  "arrow_upper_left",
  "arrow_up_down",
  "left_right_arrow",
  "arrows_counterclockwise",
  "arrow_right_hook",
  "leftwards_arrow_with_hook",
  "arrow_heading_up",
  "arrow_heading_down",
  "hash",
  "information_source",
  "abc",
  "abcd",
  "capital_abcd",
  "symbols",
  "musical_note",
  "notes",
  "wavy_dash",
  "curly_loop",
  "heavy_check_mark",
  "arrows_clockwise",
  "heavy_plus_sign",
  "heavy_minus_sign",
  "heavy_division_sign",
  "heavy_multiplication_x",
  "infinity",
  "heavy_dollar_sign",
  "currency_exchange",
  "copyright",
  "registered",
  "tm",
  "end",
  "back",
  "on",
  "top",
  "soon",
  "ballot_box_with_check",
  "radio_button",
  "white_circle",
  "black_circle",
  "red_circle",
  "large_blue_circle",
  "small_orange_diamond",
  "small_blue_diamond",
  "large_orange_diamond",
  "large_blue_diamond",
  "small_red_triangle",
  "black_small_square",
  "white_small_square",
  "black_large_square",
  "white_large_square",
  "small_red_triangle_down",
  "black_medium_square",
  "white_medium_square",
  "black_medium_small_square",
  "white_medium_small_square",
  "black_square_button",
  "white_square_button",
  "speaker",
  "sound",
  "loud_sound",
  "mute",
  "mega",
  "loudspeaker",
  "bell",
  "no_bell",
  "black_joker",
  "mahjong",
  "spades",
  "clubs",
  "hearts",
  "diamonds",
  "flower_playing_cards",
  "thought_balloon",
  "right_anger_bubble",
  "speech_balloon",
  "left_speech_bubble",
  "clock1",
  "clock2",
  "clock3",
  "clock4",
  "clock5",
  "clock6",
  "clock7",
  "clock8",
  "clock9",
  "clock10",
  "clock11",
  "clock12",
  "clock130",
  "clock230",
  "clock330",
  "clock430",
  "clock530",
  "clock630",
  "clock730",
  "clock830",
  "clock930",
  "clock1030",
  "clock1130",
  "clock1230",
  "white_flag",
  "black_flag",
  "pirate_flag",
  "checkered_flag",
  "triangular_flag_on_post",
  "rainbow_flag",
  "united_nations",
  "afghanistan",
  "aland_islands",
  "albania",
  "algeria",
  "american_samoa",
  "andorra",
  "angola",
  "anguilla",
  "antarctica",
  "antigua_barbuda",
  "argentina",
  "armenia",
  "aruba",
  "australia",
  "austria",
  "azerbaijan",
  "bahamas",
  "bahrain",
  "bangladesh",
  "barbados",
  "belarus",
  "belgium",
  "belize",
  "benin",
  "bermuda",
  "bhutan",
  "bolivia",
  "caribbean_netherlands",
  "bosnia_herzegovina",
  "botswana",
  "brazil",
  "british_indian_ocean_territory",
  "british_virgin_islands",
  "brunei",
  "bulgaria",
  "burkina_faso",
  "burundi",
  "cape_verde",
  "cambodia",
  "cameroon",
  "canada",
  "canary_islands",
  "cayman_islands",
  "central_african_republic",
  "chad",
  "chile",
  "cn",
  "christmas_island",
  "cocos_islands",
  "colombia",
  "comoros",
  "congo_brazzaville",
  "congo_kinshasa",
  "cook_islands",
  "costa_rica",
  "croatia",
  "cuba",
  "curacao",
  "cyprus",
  "czech_republic",
  "denmark",
  "djibouti",
  "dominica",
  "dominican_republic",
  "ecuador",
  "egypt",
  "el_salvador",
  "equatorial_guinea",
  "eritrea",
  "estonia",
  "ethiopia",
  "eu",
  "falkland_islands",
  "faroe_islands",
  "fiji",
  "finland",
  "fr",
  "french_guiana",
  "french_polynesia",
  "french_southern_territories",
  "gabon",
  "gambia",
  "georgia",
  "de",
  "ghana",
  "gibraltar",
  "greece",
  "greenland",
  "grenada",
  "guadeloupe",
  "guam",
  "guatemala",
  "guernsey",
  "guinea",
  "guinea_bissau",
  "guyana",
  "haiti",
  "honduras",
  "hong_kong",
  "hungary",
  "iceland",
  "india",
  "indonesia",
  "iran",
  "iraq",
  "ireland",
  "isle_of_man",
  "israel",
  "it",
  "cote_divoire",
  "jamaica",
  "jp",
  "jersey",
  "jordan",
  "kazakhstan",
  "kenya",
  "kiribati",
  "kosovo",
  "kuwait",
  "kyrgyzstan",
  "laos",
  "latvia",
  "lebanon",
  "lesotho",
  "liberia",
  "libya",
  "liechtenstein",
  "lithuania",
  "luxembourg",
  "macau",
  "macedonia",
  "madagascar",
  "malawi",
  "malaysia",
  "maldives",
  "mali",
  "malta",
  "marshall_islands",
  "martinique",
  "mauritania",
  "mauritius",
  "mayotte",
  "mexico",
  "micronesia",
  "moldova",
  "monaco",
  "mongolia",
  "montenegro",
  "montserrat",
  "morocco",
  "mozambique",
  "myanmar",
  "namibia",
  "nauru",
  "nepal",
  "netherlands",
  "new_caledonia",
  "new_zealand",
  "nicaragua",
  "niger",
  "nigeria",
  "niue",
  "norfolk_island",
  "northern_mariana_islands",
  "north_korea",
  "norway",
  "oman",
  "pakistan",
  "palau",
  "palestinian_territories",
  "panama",
  "papua_new_guinea",
  "paraguay",
  "peru",
  "philippines",
  "pitcairn_islands",
  "poland",
  "portugal",
  "puerto_rico",
  "qatar",
  "reunion",
  "romania",
  "ru",
  "rwanda",
  "st_barthelemy",
  "st_helena",
  "st_kitts_nevis",
  "st_lucia",
  "st_pierre_miquelon",
  "st_vincent_grenadines",
  "samoa",
  "san_marino",
  "sao_tome_principe",
  "saudi_arabia",
  "senegal",
  "serbia",
  "seychelles",
  "sierra_leone",
  "singapore",
  "sint_maarten",
  "slovakia",
  "slovenia",
  "solomon_islands",
  "somalia",
  "south_africa",
  "south_georgia_south_sandwich_islands",
  "kr",
  "south_sudan",
  "es",
  "sri_lanka",
  "sudan",
  "suriname",
  "swaziland",
  "sweden",
  "switzerland",
  "syria",
  "taiwan",
  "tajikistan",
  "tanzania",
  "thailand",
  "timor_leste",
  "togo",
  "tokelau",
  "tonga",
  "trinidad_tobago",
  "tunisia",
  "tr",
  "turkmenistan",
  "turks_caicos_islands",
  "tuvalu",
  "uganda",
  "ukraine",
  "united_arab_emirates",
  "uk",
  "england",
  "scotland",
  "wales",
  "us",
  "us_virgin_islands",
  "uruguay",
  "uzbekistan",
  "vanuatu",
  "vatican_city",
  "venezuela",
  "vietnam",
  "wallis_futuna",
  "western_sahara",
  "yemen",
  "zambia",
  "zimbabwe"
];
var emojilib = {
  lib: require$$0,
  ordered: require$$1,
  fitzpatrick_scale_modifiers: ["🏻", "🏼", "🏽", "🏾", "🏿"]
};
const emojilib$1 = /* @__PURE__ */ getDefaultExportFromCjs(emojilib);
var charRegex = () => {
  const astralRange = "\\ud800-\\udfff";
  const comboMarksRange = "\\u0300-\\u036f";
  const comboHalfMarksRange = "\\ufe20-\\ufe2f";
  const comboSymbolsRange = "\\u20d0-\\u20ff";
  const comboMarksExtendedRange = "\\u1ab0-\\u1aff";
  const comboMarksSupplementRange = "\\u1dc0-\\u1dff";
  const comboRange = comboMarksRange + comboHalfMarksRange + comboSymbolsRange + comboMarksExtendedRange + comboMarksSupplementRange;
  const varRange = "\\ufe0e\\ufe0f";
  const familyRange = "\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93";
  const astral = `[${astralRange}]`;
  const combo = `[${comboRange}]`;
  const fitz = "\\ud83c[\\udffb-\\udfff]";
  const modifier = `(?:${combo}|${fitz})`;
  const nonAstral = `[^${astralRange}]`;
  const regional = "(?:\\uD83C[\\uDDE6-\\uDDFF]){2}";
  const surrogatePair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
  const zwj = "\\u200d";
  const blackFlag = "(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)";
  const family = `[${familyRange}]`;
  const optModifier = `${modifier}?`;
  const optVar = `[${varRange}]?`;
  const optJoin = `(?:${zwj}(?:${[nonAstral, regional, surrogatePair].join("|")})${optVar + optModifier})*`;
  const seq = optVar + optModifier + optJoin;
  const nonAstralCombo = `${nonAstral}${combo}?`;
  const symbol = `(?:${[nonAstralCombo, combo, regional, surrogatePair, astral, family].join("|")})`;
  return new RegExp(`${blackFlag}|${fitz}(?=${fitz})|${symbol + seq}`, "g");
};
const charRegex$1 = /* @__PURE__ */ getDefaultExportFromCjs(charRegex);
charRegex$1();
var NON_SPACING_MARK = String.fromCharCode(65039);
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, "g");
function normalizeCode(code2) {
  return code2.replace(nonSpacingRegex, "");
}
function normalizeName(name) {
  return /:.+:/.test(name) ? name.slice(1, -1) : name;
}
var emojiData = Object.entries(emojilib$1.lib).map(
  ([name, { char: emoji }]) => [name, emoji]
);
var emojiCodesByName = new Map(emojiData);
new Map(
  emojiData.map(([name, emoji]) => [normalizeCode(emoji), name])
);
var get = (codeOrName) => {
  distExports.assert.string(codeOrName);
  return emojiCodesByName.get(normalizeName(codeOrName));
};
const emoticon = [
  {
    name: "angry",
    emoji: "😠",
    tags: ["mad", "annoyed"],
    description: "angry face",
    emoticons: [">:(", ">:[", ">:-(", ">:-[", ">=(", ">=[", ">=-(", ">=-["]
  },
  {
    name: "blush",
    emoji: "😊",
    tags: ["proud"],
    description: "smiling face with smiling eyes",
    emoticons: [
      ':")',
      ':"]',
      ':"D',
      ':-")',
      ':-"]',
      ':-"D',
      '=")',
      '="]',
      '="D',
      '=-")',
      '=-"]',
      '=-"D'
    ]
  },
  {
    name: "broken_heart",
    emoji: "💔",
    tags: [],
    description: "broken heart",
    emoticons: ["<\\3", "</3"]
  },
  {
    name: "confused",
    emoji: "😕",
    tags: [],
    description: "confused face",
    emoticons: [":/", ":\\", ":-/", ":-\\", "=/", "=\\", "=-/", "=-\\"]
  },
  {
    name: "cry",
    emoji: "😢",
    tags: ["sad", "tear"],
    description: "crying face",
    emoticons: [
      ":,(",
      ":,[",
      ":,|",
      ":,-(",
      ":,-[",
      ":,-|",
      ":'(",
      ":'[",
      ":'|",
      ":'-(",
      ":'-[",
      ":'-|",
      "=,(",
      "=,[",
      "=,|",
      "=,-(",
      "=,-[",
      "=,-|",
      "='(",
      "='[",
      "='|",
      "='-(",
      "='-[",
      "='-|"
    ]
  },
  {
    name: "frowning",
    emoji: "😦",
    tags: [],
    description: "frowning face with open mouth",
    emoticons: [":(", ":[", ":-(", ":-[", "=(", "=[", "=-(", "=-["]
  },
  {
    name: "heart",
    emoji: "❤️",
    tags: ["love"],
    description: "red heart",
    emoticons: ["<3"]
  },
  {
    name: "imp",
    emoji: "👿",
    tags: ["angry", "devil", "evil", "horns"],
    description: "angry face with horns",
    emoticons: ["]:(", "]:[", "]:-(", "]:-[", "]=(", "]=[", "]=-(", "]=-["]
  },
  {
    name: "innocent",
    emoji: "😇",
    tags: ["angel"],
    description: "smiling face with halo",
    emoticons: [
      "o:)",
      "o:]",
      "o:D",
      "o:-)",
      "o:-]",
      "o:-D",
      "o=)",
      "o=]",
      "o=D",
      "o=-)",
      "o=-]",
      "o=-D",
      "O:)",
      "O:]",
      "O:D",
      "O:-)",
      "O:-]",
      "O:-D",
      "O=)",
      "O=]",
      "O=D",
      "O=-)",
      "O=-]",
      "O=-D",
      "0:)",
      "0:]",
      "0:D",
      "0:-)",
      "0:-]",
      "0:-D",
      "0=)",
      "0=]",
      "0=D",
      "0=-)",
      "0=-]",
      "0=-D"
    ]
  },
  {
    name: "joy",
    emoji: "😂",
    tags: ["tears"],
    description: "face with tears of joy",
    emoticons: [
      ":,)",
      ":,]",
      ":,D",
      ":,-)",
      ":,-]",
      ":,-D",
      ":')",
      ":']",
      ":'D",
      ":'-)",
      ":'-]",
      ":'-D",
      "=,)",
      "=,]",
      "=,D",
      "=,-)",
      "=,-]",
      "=,-D",
      "=')",
      "=']",
      "='D",
      "='-)",
      "='-]",
      "='-D"
    ]
  },
  {
    name: "kissing",
    emoji: "😗",
    tags: [],
    description: "kissing face",
    emoticons: [":*", ":-*", "=*", "=-*"]
  },
  {
    name: "laughing",
    emoji: "😆",
    tags: ["happy", "haha"],
    description: "grinning squinting face",
    emoticons: [
      "x)",
      "x]",
      "xD",
      "x-)",
      "x-]",
      "x-D",
      "X)",
      "X]",
      "X-)",
      "X-]",
      "X-D"
    ]
  },
  {
    name: "man",
    emoji: "👨",
    tags: ["mustache", "father", "dad"],
    description: "man",
    emoticons: [":3", ":-3", "=3", "=-3", ";3", ";-3", "x3", "x-3", "X3", "X-3"]
  },
  {
    name: "neutral_face",
    emoji: "😐",
    tags: ["meh"],
    description: "neutral face",
    emoticons: [":|", ":-|", "=|", "=-|"]
  },
  {
    name: "no_mouth",
    emoji: "😶",
    tags: ["mute", "silence"],
    description: "face without mouth",
    emoticons: [":-"]
  },
  {
    name: "open_mouth",
    emoji: "😮",
    tags: ["surprise", "impressed", "wow"],
    description: "face with open mouth",
    emoticons: [
      ":o",
      ":O",
      ":0",
      ":-o",
      ":-O",
      ":-0",
      "=o",
      "=O",
      "=0",
      "=-o",
      "=-O",
      "=-0"
    ]
  },
  {
    name: "rage",
    emoji: "😡",
    tags: ["angry"],
    description: "pouting face",
    emoticons: [":@", ":-@", "=@", "=-@"]
  },
  {
    name: "smile",
    emoji: "😄",
    tags: ["happy", "joy", "laugh", "pleased"],
    description: "grinning face with smiling eyes",
    emoticons: [":D", ":-D", "=D", "=-D"]
  },
  {
    name: "smiley",
    emoji: "😃",
    tags: ["happy", "joy", "haha"],
    description: "grinning face with big eyes",
    emoticons: [":)", ":]", ":-)", ":-]", "=)", "=]", "=-)", "=-]"]
  },
  {
    name: "smiling_imp",
    emoji: "😈",
    tags: ["devil", "evil", "horns"],
    description: "smiling face with horns",
    emoticons: [
      "]:)",
      "]:]",
      "]:D",
      "]:-)",
      "]:-]",
      "]:-D",
      "]=)",
      "]=]",
      "]=D",
      "]=-)",
      "]=-]",
      "]=-D"
    ]
  },
  {
    name: "sob",
    emoji: "😭",
    tags: ["sad", "cry", "bawling"],
    description: "loudly crying face",
    emoticons: [
      ":,'(",
      ":,'[",
      ":,'-(",
      ":,'-[",
      ":',(",
      ":',[",
      ":',-(",
      ":',-[",
      "=,'(",
      "=,'[",
      "=,'-(",
      "=,'-[",
      "=',(",
      "=',[",
      "=',-(",
      "=',-["
    ]
  },
  {
    name: "stuck_out_tongue",
    emoji: "😛",
    tags: [],
    description: "face with tongue",
    emoticons: [
      ":p",
      ":P",
      ":d",
      ":-p",
      ":-P",
      ":-d",
      "=p",
      "=P",
      "=d",
      "=-p",
      "=-P",
      "=-d"
    ]
  },
  {
    name: "stuck_out_tongue_closed_eyes",
    emoji: "😝",
    tags: ["prank"],
    description: "squinting face with tongue",
    emoticons: ["xP", "x-p", "x-P", "x-d", "Xp", "Xd", "X-p", "X-P", "X-d"]
  },
  {
    name: "stuck_out_tongue_winking_eye",
    emoji: "😜",
    tags: ["prank", "silly"],
    description: "winking face with tongue",
    emoticons: [";p", ";P", ";d", ";-p", ";-P", ";-d"]
  },
  {
    name: "sunglasses",
    emoji: "😎",
    tags: ["cool"],
    description: "smiling face with sunglasses",
    emoticons: [
      "8)",
      "8]",
      "8D",
      "8-)",
      "8-]",
      "8-D",
      "B)",
      "B]",
      "B-)",
      "B-]",
      "B-D"
    ]
  },
  {
    name: "sweat",
    emoji: "😓",
    tags: [],
    description: "downcast face with sweat",
    emoticons: [
      ",:(",
      ",:[",
      ",:-(",
      ",:-[",
      ",=(",
      ",=[",
      ",=-(",
      ",=-[",
      "':(",
      "':[",
      "':-(",
      "':-[",
      "'=(",
      "'=[",
      "'=-(",
      "'=-["
    ]
  },
  {
    name: "sweat_smile",
    emoji: "😅",
    tags: ["hot"],
    description: "grinning face with sweat",
    emoticons: [
      ",:)",
      ",:]",
      ",:D",
      ",:-)",
      ",:-]",
      ",:-D",
      ",=)",
      ",=]",
      ",=D",
      ",=-)",
      ",=-]",
      ",=-D",
      "':)",
      "':]",
      "':D",
      "':-)",
      "':-]",
      "':-D",
      "'=)",
      "'=]",
      "'=D",
      "'=-)",
      "'=-]",
      "'=-D"
    ]
  },
  {
    name: "unamused",
    emoji: "😒",
    tags: ["meh"],
    description: "unamused face",
    emoticons: [
      ":$",
      ":s",
      ":z",
      ":S",
      ":Z",
      ":-$",
      ":-s",
      ":-z",
      ":-S",
      ":-Z",
      "=$",
      "=s",
      "=z",
      "=S",
      "=Z",
      "=-$",
      "=-s",
      "=-z",
      "=-S",
      "=-Z"
    ]
  },
  {
    name: "wink",
    emoji: "😉",
    tags: ["flirt"],
    description: "winking face",
    emoticons: [";)", ";]", ";D", ";-)", ";-]", ";-D"]
  }
];
const RE_EMOJI = /:\+1:|:-1:|:[\w-]+:/g;
const RE_SHORT = /[$@|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g;
const RE_PUNCT = /(?:_|-(?!1))/g;
const DEFAULT_SETTINGS = {
  padSpaceAfter: false,
  emoticon: false,
  accessible: false
};
function plugin(options) {
  const settings = Object.assign({}, DEFAULT_SETTINGS, options);
  const pad = !!settings.padSpaceAfter;
  const emoticonEnable = !!settings.emoticon;
  const accessible = !!settings.accessible;
  function aria(text2, label2) {
    return {
      type: "text",
      meta: null,
      value: text2,
      data: {
        hName: "span",
        hProperties: {
          role: "img",
          ariaLabel: label2
        },
        hChildren: [{ type: "text", value: text2 }]
      }
    };
  }
  function replaceEmoticon(match) {
    const iconFull = emoticon.find((e) => e.emoticons.includes(match));
    const iconPart = emoticon.find((e) => e.emoticons.includes(match.slice(0, -1)));
    const icon = iconFull || iconPart;
    if (!icon) {
      return false;
    }
    const trimmedChar = !iconFull && iconPart ? match.slice(-1) : "";
    const addPad = pad ? " " : "";
    const replaced = icon.emoji + addPad + trimmedChar;
    if (accessible) {
      return aria(replaced, icon.name + " emoticon");
    }
    return replaced;
  }
  function replaceEmoji(match) {
    let got = get(match);
    if (typeof got === "undefined") {
      return false;
    }
    if (pad) {
      got = got + " ";
    }
    if (accessible) {
      const label2 = match.slice(1, -1).replace(RE_PUNCT, " ") + " emoji";
      return aria(got, label2);
    }
    return got;
  }
  const replacers = [[RE_EMOJI, replaceEmoji]];
  if (emoticonEnable) {
    replacers.push([RE_SHORT, replaceEmoticon]);
  }
  function transformer(tree) {
    findAndReplace(tree, replacers);
  }
  return transformer;
}
const Spinner = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Box,
    {
      sx: {
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircularProgress, {})
    }
  );
};
const ReactMarkdown = reactExports.lazy(() => import("./index-_XjYPPWB.js"));
const CodeBlock = ({ language, value }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    value,
    /* @__PURE__ */ jsxRuntimeExports.jsx(lib.CopyToClipboard, { text: value, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button$1, { variant: "contained", color: "primary", children: "Copy to Clipboard" }) })
  ] });
};
const ImageComponent = ({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  const [open, setOpen] = reactExports.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  reactExports.useEffect(() => {
    if (src.startsWith("http")) {
      fetch(src).then((response) => response.blob()).then((blob) => {
        const blobUrl = URL.createObjectURL(blob);
        setImgSrc(blobUrl);
        setLoading(false);
      }).catch((error) => {
        console.log(error);
        setLoading(false);
      });
      return;
    }
    const fileId = parseInt(src, 10);
    fetch(`${new Config().API_URL}/file/download/${fileId}`, {
      responseType: "blob"
    }).then((res) => res.blob()).then((response) => {
      const blobUrl = URL.createObjectURL(new Blob([response]));
      setImgSrc(blobUrl);
      setLoading(false);
    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, [src]);
  if (loading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Spinner, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(React.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imgSrc,
        alt,
        ...props,
        className: "preview-image",
        onClick: handleClickOpen
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Dialog$1,
      {
        fullScreen: true,
        open,
        onClose: handleClose,
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tollbar, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            IconButton,
            {
              edge: "start",
              color: "inherit",
              onClick: handleClose,
              "aria-label": "close",
              children: '"closeicon"'
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imgSrc, alt, ...props, className: "full-screen-image" })
        ]
      }
    )
  ] });
};
const MarkdownComponent = ({ source }) => {
  if (!source) {
    return null;
  }
  let formattedSource = source.replace(/ +/g, " ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ReactMarkdown,
    {
      components: {
        code({ node: node2, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            CodeBlock,
            {
              language: match[1],
              value: String(children).replace(/\n$/, ""),
              ...props
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className, ...props, children });
        },
        a({ node: node2, children, href, ...props }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link$1,
            {
              href,
              target: "_blank",
              rel: "noopener noreferrer",
              ...props,
              children
            }
          );
        },
        li({ node: node2, children, ordered, ...props }) {
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { ...props, children });
        },
        img: ImageComponent
      },
      remarkPlugins: [
        remarkGfm,
        remarkBreaks,
        remarkSlug,
        rehypeAutolinkHeadings,
        plugin
      ],
      children: formattedSource
    }
  ) });
};
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MarkdownComponent
}, Symbol.toStringTag, { value: "Module" }));
export {
  asciiAlphanumeric as a,
  asciiAlpha as b,
  classifyCharacter as c,
  asciiControl as d,
  asciiAtext as e,
  factorySpace as f,
  asciiPunctuation as g,
  asciiHexDigit as h,
  asciiDigit as i,
  markdownLineEnding as j,
  markdownLineEndingOrSpace as k,
  blankLine as l,
  markdownSpace as m,
  normalizeIdentifier as n,
  ok$4 as o,
  push as p,
  combineExtensions as q,
  resolveAll as r,
  splice as s,
  toString$1 as t,
  extend$1 as u,
  visit$2 as v,
  unreachable as w,
  index as x
};
