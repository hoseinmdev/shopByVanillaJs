import siteFooter from "../components/layout/siteFooter/siteFooter.js";
import siteNavigation from "../components/layout/siteNavigation/siteNavigation.js";

const siteLayout = (children) => {
  return ` 
    <div class="siteLayout">
        ${siteNavigation}
        ${children}
        ${siteFooter}
    </div>`;
};
export default siteLayout;
