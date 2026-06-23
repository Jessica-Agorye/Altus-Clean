import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-bold">Altus Clean</h2>

          <p className="mt-4 text-slate-400">
            Professional cleaning services for homes and businesses.
          </p>

          <p className="mt-8 text-sm text-slate-500">
            © 2026 Altus Clean. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
