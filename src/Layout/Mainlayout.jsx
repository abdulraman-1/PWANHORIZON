import PropTypes from "prop-types";


const MainLayout = ({ children }) => {
    return (
      <main className="w-full lg:w-[calc(100%-288px)] mt-20  lg:ml-auto p-8 ">
        {children}
      </main>
    );
  }

MainLayout.propTypes = {
children: PropTypes.node,
};
  
  export default MainLayout;
  