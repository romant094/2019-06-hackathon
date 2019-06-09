// https://colorpalettes.net/
export const cols = {
  p1: {
    c1: { hex: '#f2f1dc',	rgb: 'rgb(242,241,220,1)'},
    c2: { hex: '#c7e3b9',	rgb: 'rgb(199,227,185,1)'},
    c3: { hex: '#85c9ba',	rgb: 'rgb(133,201,186,1)'},
    c4: { hex: '#6aa1a3',	rgb: 'rgb(106,161,163,1)'},
    c5: { hex: '#5b7389',	rgb: 'rgb(91,115,137,1)'},
  },
  p2: {
    c1: { hex: '#fff8b6', rgb: 'rgb(255,248,182,1)'},
    c2: { hex: '#ffe4a3', rgb: 'rgb(255,228,163,1)'},
    c3: { hex: '#ffbd91', rgb: 'rgb(255,189,145,1)'},
    c4: { hex: '#ff8d71', rgb: 'rgb(255,141,113,1)'},
    c5: { hex: '#ff707e', rgb: 'rgb(255,112,126,1)'},
  },
  p3: {
    c1: { hex: '#f9e9d2', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#e3b48c', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#966a57', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#4b2828', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#2d1616', rgb: 'rgb(45,22,22,1)'},
  },
  p4: {
    c1: { hex: '#06491d', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#52b58f', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#dabf95', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#c76838', rgb: 'rgb(75,40,40,1)'},
    c4: { hex: '#793c13', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#350c09', rgb: 'rgb(45,22,22,1)'},
  },
  p5: {
    c1: { hex: '#d11d1d', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#ecb573', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#ffe6a3', rgb: 'rgb(150,106,87,1)'},
    c4: { hex: '#879163', rgb: 'rgb(75,40,40,1)'},
    c4: { hex: '#3c3115', rgb: 'rgb(75,40,40,1)'},
  },
  p6: {
    c1: { hex: '#793c13', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#ff707e', rgb: 'rgb(249,233,210,1)'},
    c3: { hex: '#7BBEB9', rgb: 'rgb(227,180,140,1)'},
    c4: { hex: '#06491d', rgb: 'rgb(249,233,210,1)'},
    c5: { hex: '#484D58', rgb: 'rgb(75,40,40,1)'},
    c6: { hex: '#c3c3c3',	rgb: 'rgb(199,227,185,1)'},
    c7: { hex: '#333135', rgb: 'rgb(75,40,40,1)'},
  },
  p7: {
    c1: { hex: '#8C8757', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#FEFAD7', rgb: 'rgb(249,233,210,1)'},
    c3: { hex: '#FFBB22', rgb: 'rgb(227,180,140,1)'},
    c4: { hex: '#C54F22', rgb: 'rgb(249,233,210,1)'},
    c5: { hex: '#380702', rgb: 'rgb(75,40,40,1)'},
    c6: { hex: '#2d1616', rgb: 'rgb(75,40,40,1)'},
  },
  p8: {
    c1: { hex: '#fb8700', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#f8e119', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#d7e58d', rgb: 'rgb(249,233,210,1)'},
    c4: { hex: '#61767b', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#304a4b', rgb: 'rgb(75,40,40,1)'},
  },
  p9: {
    c1: { hex: '#fbaf3b', rgb: 'rgb(249,233,210,1)'},
    c2: { hex: '#eff6a9', rgb: 'rgb(227,180,140,1)'},
    c3: { hex: '#64856c', rgb: 'rgb(249,233,210,1)'},
    c4: { hex: '#002b12', rgb: 'rgb(75,40,40,1)'},
    c5: { hex: '#010005', rgb: 'rgb(75,40,40,1)'},
  },

}




export const st = {
  w: {
    color: 'white',
  },
  grey: {
    color: 'grey',
  },
  tar: {
    textAlign: 'right'
  },
  tal: {
    textAlign: 'left'
  },
  tac: {
    textAlign: 'center'
  },
  aic: {
    alignItems: 'center'
  },
  bg: {
    backgroundColor: cols.p6.c6.hex,
  },
  m01: {
    margin: '0.1em',
  },
  m0: {
    margin: '0em',
  },
  m05: {
    margin: '0.5em',
  },
  m1: {
    margin: '1em',
  },
  p0: {
    padding: '0em',
  },
  p01: {
    padding: '0.1em',
  },
  p05: {
    padding: '0.5em',
  },
  p1: {
    padding: '1em',
  },
  titleWrapper: {

  },
  inputWrapper: {

  },
  contentContainer: {
    flex: 1 // pushes the footer to the end of the screen
  },
  header: {
    backgroundColor: '#f4e9d8',
    position: 'absolute',
    height: 90,
    width: '100%',
    top: 0
  },
  body: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    top: 90
  },
  footer: {
    backgroundColor: '#f4e9d8',
    position: 'absolute',
    height: 90,
    width: '100%',
    bottom: 0
  },
  h1: {
    marginTop: '2em',
  },
  h2: {
    padding: '1em 0em 1em',
  },
  h3: {
    padding: '0.5em 0em 0.5em',
  },
  h4: {
    margin: '0em 0em 0em 0em',
    padding: '0em 0em 0em 0em',
  },
  txtShadow: {
    textShadow: '0px 0px 2px rgb(0, 0, 0, 0.9)',
  },
  txtShadow2: {
    textShadow: '0px 0px 2px rgb(0, 0, 0, 0.9)',
  },
  txtShadowH: {
    textShadow: '0px 0px 2px rgb(0, 0, 0, 0.9)',
  },
  btnShadow: {
    boxShadow: '0px 0px 2px rgb(0, 0, 0, 0.9)',
  },
  last: {
    marginBottom: '300px',
  },
  form: {
    justifyContent: 'center',
  },
  // bgImage : {
  //   height:'43em',
  //   paddingTop: '1em',
  //   backgroundColor: 'rgb(255,255,255,1)',
  //   backgroundBlendMode: 'overlay',
  // },
  bgImage : {
    backgroundImage: `url(http://wallpaperswide.com/download/hot_air_balloons_in_the_air-wallpaper-2048x1152.jpg)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1903702/pexels-photo-1903702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1482927/pexels-photo-1482927.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    // backgroundImage: `url(https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    // backgroundImage: `url(https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1717177/pexels-photo-1717177.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1797092/pexels-photo-1797092.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
    // backgroundImage: `url(https://images.pexels.com/photos/219014/pexels-photo-219014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    // backgroundImage: `url(https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260)`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    height:'43em',
    paddingTop: '1em',
    backgroundColor: 'rgb(0,0,0,0.3)',
    backgroundBlendMode: 'overlay',
  },
  bgImageClouds : {
    backgroundImage: `url(https://i.pinimg.com/originals/cd/65/0c/cd650cd42389537abcad582888eda4d4.jpg)`,
    // backgroundImage: `url(https://img.freepik.com/free-vector/abstract-geometric-pattern-background_1319-242.jpg?size=626&ext=jpg)`,
    backgroundPosition: 'center center',
    backgroundSize: '150px 150px',
    // backgroundSize: '200px 200px',
  },
  bgImageCard : {
    backgroundImage: `url(http://wallpaperswide.com/download/hot_air_balloons_in_the_air-wallpaper-2048x1152.jpg)`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    borderWidth: '0px',
    // height:'45em',
    // paddingTop: '1em',
    backgroundColor: 'rgb(0,0,0,0.3)',
    backgroundBlendMode: 'overlay',
  },
  bgImageSidebar : {
    // backgroundImage: `url(http://wallpaperswide.com/download/hot_air_balloons_in_the_air-wallpaper-2048x1152.jpg)`,
    // backgroundPosition: 'top center',
    // backgroundSize: 'cover',
    backgroundColor: `${cols.p6.c6.hex}`,
    backgroundBlendMode: 'overlay',
  },
};