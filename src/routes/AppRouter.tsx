import Home from "../App/Home";
//import About from "../features/About/About";
//import NotFound from "../features/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}