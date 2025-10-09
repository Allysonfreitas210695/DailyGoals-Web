import { useNavigate } from "react-router";

const PoliticaPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          padding: "1rem",
          background: "#f8f8f8",
          borderBottom: "1px solid #ddd",
        }}
      >
        <button
          onClick={() => navigate("/")}
          style={{
            background: "#007AFF",
            color: "white",
            border: "none",
            borderRadius: 6,
            padding: "8px 14px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← Voltar
        </button>
      </div>

      <iframe
        src="/politica.html"
        title="Política de Privacidade - DailyGoals"
        style={{
          flex: 1,
          width: "100%",
          border: "none",
        }}
      />
    </div>
  );
};

export default PoliticaPage;
