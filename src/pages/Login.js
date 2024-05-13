import { useState } from "react";
import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş veya kayıt işlemlerini burada yapabilirsiniz
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Giriş Yap" : "Kayıt Ol"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Şifre:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isLogin ? "Giriş Yap" : "Kayıt Ol"}</button>
      </form>
      <p>
        {isLogin ? "Hesabınız yok mu?" : "Zaten bir hesabınız var mı?"}{" "}
        <Link onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Kayıt Ol" : "Giriş Yap"}
        </Link>
      </p>
    </div>
  );
}
