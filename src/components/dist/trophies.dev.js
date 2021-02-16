"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Trophies(props) {
  var tGold,
      tSilver,
      tBronze = 0;
  console.log("----------");
  console.log({
    props: props
  });
  /*
      props.lesson.forEach(lesson => {
          if(lesson.score > 0.9){
              tGold++;
          }
          if(lesson.score > 0.5 && lesson.score < 0.9){
              tSilver++;
          }
          if(lesson.score > 0.1 && lesson.score < 0.5){
              tBronze++;
          }
          
      })
      console.log(tGold + " " + tSilver + " " + tBronze);
  
      return (<React.Fragment>
      <p>{tGold}{tSilver}{tBronze}</p>
      </React.Fragment>);
      */
}

var _default = Trophies;
exports["default"] = _default;