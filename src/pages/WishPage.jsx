import React from "react";
import Layout from "../UI/Layout";
import "./WishPage.css";

const WishPage = () => {
  return (
    <Layout>
      <div className="wishpage-title">我要許願</div>
      <form>
        <div className="wishpage-formitem">
          <label htmlFor="wishpage-description">描述一直占用你時間的事情</label>
          <textarea id="wishpage-description"></textarea>
        </div>
      </form>
    </Layout>
  );
};
export default WishPage;
