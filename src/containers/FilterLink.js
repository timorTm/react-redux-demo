import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../component/Link";
const mapStateToProps = (state, owerProps) => {
  return {
    active: state.visibilityFilter === owerProps.filter
  };
};

const mapDispatchToProps = (dispatch, owerProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(owerProps.filter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
