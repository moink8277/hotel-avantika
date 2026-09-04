import SEO from "../seo/SEO";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for could not be found." />
      <section className="section" style={{ textAlign: "center", padding: "120px 8%" }}>
        <h1>404</h1>
        <p>The page you are looking for could not be found.</p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </section>
    </>
  );
}
