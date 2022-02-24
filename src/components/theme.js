const backgroundColor1 = '#FFFFFF'
const backgroundColor2 = '#000000'
const color1 = '#E2E2E2'
const color2 = '#363537'

const backgroundColorImage1 = '#5F9EA0'
const backgroundColorImageDisabled1 = '#325354'
const backgroundColorImage2 = '#708090'
const backgroundColorImageDisabled2 = '#384048'

const globalFont = 'monospace';
const cardBorder = 0;
const cardWeight = '550';
const cardTitleWeight =' 600';
const toolsSize = 16;
const vtkFontSize = 14;
const cardDescriptionSize = 14;
const bodySize = 14;
const titleSize = 18;

export const global = {
  root: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 100,
    paddingRight: 20,
    paddingLeft: 20,
  }
}

export const lightTheme = {
  body: backgroundColor1,
  text: '#363537',
  toggleBorder: '#FFF',
  root: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    backgroundColor: backgroundColor1,
    paddingTop: 20,
    paddingBottom: 100,
    paddingRight: 20,
    paddingLeft: 20,
  },
  typography: {
    fontFamily: 'monospace'
  },
  appBar: {
    height: 40,
    minHeight: 40,
    background: color1,
  },
  bodyText: {
    color: backgroundColor2,
    fontFamily: globalFont,
    fontSize: bodySize,
  },
  titleText: {
    display: "flex",
    marginTop: 0,
    marginLeft: 60,
    marginRight: 0,
    marginBottom: 10,
    color: backgroundColor2,
    fontFamily: globalFont,
    fontSize: titleSize,
    fontWeight: 600,
  },
  vtkText: {
    color: color2,
    fontWeight: cardWeight,
    fontFamily: globalFont,
    fontSize: vtkFontSize,
    borderColor: color2,
  },
  controlLabel: {
    color: color2,
    fontFamily: globalFont,
    fontSize: vtkFontSize,
  },
  dropzonePreview: {
    color: color2,
    fontFamily: globalFont,
  },
  dropzoneActive: {},
  dropzoneIcon: {
    paddingTop: 40,
    width: '100px',
    height: '100px',
    color: color2,
  },
  dropzoneText: {
    paddingTop: 20,
    color: color2,
    fontFamily: globalFont,
    fontSize: bodySize,
  },
  dropzone: {
    borderColor: color2,
    borderWidth: "1px",
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    minWidth: '400px',
    background: backgroundColor1,
    fontFamily: globalFont,
   '&$dropzoneActive': {
      borderColor: 'blue',
      borderWidth: "3px",
      border: 'dashed',
      animation: 'linear infinite !important',
      backgroundImage: `repeating-linear-gradient(-45deg, ${color1}, ${color1} 25px, ${backgroundColor1} 25px, ${backgroundColor1} 50px)`,
      backgroundSize: '150% 100%',
   },
  },
  buttons: {
    color: color2,
    background: color1,
    width: '100px',
    height: '35px'
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: color2
    },
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
      "-webkit-text-fill-color":
        color1,
        fontFamily: globalFont
    },
    "& .MuiInputBase-input": {
      "-webkit-text-fill-color":
        color2,
        fontFamily: globalFont
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: color2
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: color2,
      borderWidth: "2px"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: color2,
      fontWeight: '600',
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: color2
      },
    },
    width: '120px',
  },
  checked: {
  },
  checkbox: {
    color: color2
  },
  disabled: {},
  mainWrapper: {
    backgroundColor: backgroundColor1,
    position: 'relative',
    minHeight: '100vh'
  },
  slider: {
      '& .MuiSlider-thumb': {
         color: color2
      },
      '& .MuiSlider-track': {
         color: color2
      },
      '& .MuiSlider-rail': {
         color: backgroundColor2
      }
  },
  footer: {
    position: 'relative',
    //marginTop: '-180px',
    //height: '180px',
    clear: 'both',
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardTextTools: {
    backgroundColor: backgroundColorImage1,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: color2,
    fontWeight: cardWeight,
    fontFamily: globalFont,
    fontSize: toolsSize,
    maxWidth: '250px',
    minHeight: '50px',
    alignItems: 'center',
    display: 'flex',
    paddingLeft: 10,
    flexDrection: 'column',
  },
  cardTitle: {
    paddingRight: 10,
    paddingTop: 5,
    background: color1,
    fontWeight: cardTitleWeight,
    flexDrection: 'column',
    textAlign: 'center',
    justifyContent: "right",
    textAlignVertical: "center",
    display: 'flex',
    alignItems: 'center'
  },
  cardDescription: {
    color: color2,
    paddingTop: 60,
    paddingRight: 40,
    paddingLeft: 40,
    float: 'left',
    textAlign: 'justify',	  
    backgroundColor: backgroundColorImage1,
    fontWeight: 400,
    fontSize: cardDescriptionSize,
    fontFamily: globalFont,
  },
  palette: {
    primary1Color: color1,
    primary2Color: color2
  },
  cardIcon: {
    opacity: '0.8',
    color: color2
  },
  cardMain: {
    background: 'green'
  },
  cardActive: {
    boxShadow: 'none',
    background: backgroundColorImage1,
    color: color1,
    borderWidth: cardBorder,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom: 0,
    maxWidth: 500,
  },
  cardDisabled: {
    boxShadow: 'none',
    background: backgroundColorImageDisabled1,
    color: color1,
    borderWidth: cardBorder,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom: 0,
    maxWidth: 500,
  },
  link: {
    fontFamily: globalFont,
    color: color2,
    '&:hover': {
       color: backgroundColor2,
       textDecoration: 'none',
       fontFamily: globalFont
    }
  }
}

export const darkTheme = {
  body: backgroundColor2,
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  root: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    //minHeight: '100vh',
    borderWidth: 0,
    backgroundColor: backgroundColor2,
    paddingTop: 20,
    paddingBottom: 100,
    paddingRight: 20,
    paddingLeft: 20,
    //maxHeight: '10px'
  },
  typography: {
    fontFamily: 'monospace'
  },
  appBar: {
    height: 40,
    minHeight: 40,
    background: color2,
  },
  bodyText: {
    color: color1,
    fontFamily: globalFont,
    fontSize: bodySize,
  },
  titleText: {
    display: "flex",
    marginTop: 0,
    marginLeft: 60,
    marginRight: 0,
    marginBottom: 10,
    color: color1,
    fontFamily: globalFont,
    fontSize: titleSize,
    fontWeight: 600,
  },
  vtkText: {
    color: color1,
    fontWeight: cardWeight,
    fontFamily: globalFont,
    fontSize: vtkFontSize,
  },
  controlLabel: {
    color: color1,
    fontFamily: globalFont,
    fontSize: vtkFontSize,
  },
  dropzonePreview: {
    color: color1,
    fontFamily: globalFont,
  },
  dropzoneActive: {},
  dropzoneIcon: {
    paddingTop: 40,
    width: '100px',
    height: '100px',
    color: color1,
  },
  dropzoneText: {
    paddingTop: 20,
    color: color1,
    fontFamily: globalFont,
    fontSize: bodySize,
  },
  dropzone: {
    borderColor: backgroundColor1,
    borderWidth: "1px",
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    minWidth: '400px',
    background: backgroundColor2,
    fontFamily: globalFont,
   '&$dropzoneActive': {
      borderColor: 'blue',
      borderWidth: "3px",
      border: 'dashed',
      animation: 'linear infinite !important',
      backgroundImage: `repeating-linear-gradient(-45deg, ${color2}, ${color2} 25px, ${backgroundColor2} 25px, ${backgroundColor2} 50px)`,
      backgroundSize: '150% 100%',
   },
  },
  buttons: {
    color: color1,
    background: color2,
    width: '100px',
    height: '35px'
  },
  textField: {
    "& .MuiFormLabel-root": {
      color: color1
    },
    "& .MuiFormLabel-root.Mui-disabled": {
      color: color2
    },
    "& .MuiOutlinedInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
    "& .MuiInputBase-input.Mui-disabled": {
        "-webkit-text-fill-color": color2,
       fontFamily: globalFont
    },
    "& .MuiOutlinedInput-root .Mui-disabled .MuiOutlinedInput-notchedOutline": {
        color: 'purple',
      borderWidth: "2px"
    },
    "& .MuiInputBase-input": {
      "-webkit-text-fill-color":
        color1,
        fontFamily: globalFont
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: color1
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline .Mui-disabled": {
      borderColor: 'purple',
      borderWidth: "2px",
      color: 'purple'
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: color1,
      borderWidth: "2px"
    },
    "& .MuiOutlinedInput-root.Mui-disabled fieldset": {
      borderColor: color2
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: color1,
      fontWeight: '600',
    },
    width: '120px',
  },
  checked: {
  },
  checkbox: {
    color: color1
  },
  disabled: {},
  mainWrapper: {
    backgroundColor: backgroundColor2,
    position: 'relative',
    minHeight: '100vh'
  },
  slider: {
      '& .MuiSlider-thumb': {
         color: color1
      },
      '& .MuiSlider-track': {
         color: color1
      },
      '& .MuiSlider-rail': {
         color: backgroundColor1
      }
  },
  footer: {
    position: 'relative',
    //marginTop: '-180px',
    //height: '180px',
    clear: 'both',
    paddingTop: 20,
    paddingBottom: 20,
  },
  cardTextTools: {
    backgroundColor: backgroundColorImage2,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: color2,
    fontWeight: cardWeight,
    fontFamily: globalFont,
    fontSize: toolsSize,
    maxWidth: '250px',
    minHeight: '50px',
    alignItems: 'center',
    display: 'flex',
    paddingLeft: 10,
    flexDrection: 'column',
  },
  cardTitle: {
    paddingRight: 10,
    paddingTop: 5,
    background: color2,
    fontWeight: cardTitleWeight,
    flexDrection: 'column',
    textAlign: 'center',
    justifyContent: "right",
    textAlignVertical: "center",
    display: 'flex',
    alignItems: 'center'
  },
  cardDescription: {
    color: color1,
    paddingTop: 60,
    paddingRight: 40,
    paddingLeft: 40,
    float: 'left',
    textAlign: 'justify',	  
    backgroundColor: backgroundColorImage2,
    fontWeight: 400,
    fontSize: cardDescriptionSize,
    fontFamily: globalFont,
  },
  palette: {
    primary1Color: color2,
    primary2Color: color1
  },
  cardIcon: {
    opacity: '0.8',
    color: color2
  },
  cardMain: {
    background: backgroundColorImage2
  },
  cardActive: {
    boxShadow: 'none',
    background: backgroundColorImage2,
    color: color1,
    borderWidth: cardBorder,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom: 0,
    maxWidth: 500,
  },
  cardDisabled: {
    boxShadow: 'none',
    background: backgroundColorImageDisabled2,
    color: color1,
    borderWidth: cardBorder,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 0,
    paddingLeft: 0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom: 0,
    maxWidth: 500,
  },
  link: {
    fontFamily: globalFont,
    color: color1,
    '&:hover': {
       color: backgroundColor1,
       textDecoration: 'none',
       fontFamily: globalFont
    }
  }
}

export const navTheme = {
  links: {
    color: color2,
    textDecoration: 'none'
  },
  root: {
    display: "flex",
    margin: "0px",
  },
  logo: {
    maxWidth: 70,
    marginRight: '2px',
    paddingLeft: 0,
    paddingRight:0,
    paddingTop:0,
    paddingBottom: 0
  }
}