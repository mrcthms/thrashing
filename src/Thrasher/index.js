import compose from "recompose/compose";
import withState from "recompose/withState";
import withHandlers from "recompose/withHandlers";
import Thrasher from "./Thrasher";

const enhance = compose(
  withState("is1Visible", "setIs1Visible", false),
  withState("is2Visible", "setIs2Visible", false),
  withState("is3Visible", "setIs3Visible", false),
  withHandlers({
    onClick1: props => () => props.setIs1Visible(!props.is1Visible),
    onClick2: props => () => props.setIs2Visible(!props.is2Visible),
    onClick3: props => () => props.setIs3Visible(!props.is3Visible)
  })
);

export default enhance(Thrasher);
