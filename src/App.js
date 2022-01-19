import "./App.css";
import Loading from "./extensions/Loading";
import Payment from "./payment/Payment";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./success/Success";

function mapStateToProps(state) {
  return {
    loading: state.loadingReducer,
  };
}

function App({ loading }) {
  return (
    <BrowserRouter>
      <div className="app">
        {loading && <Loading />}
        <Routes>
          <Route path="success" element={<Success />} />
          <Route path="/" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, null)(App);
