import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";

export default function Secret() {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/balance");
      const json = await res.json();

      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== "undefined" && loading) return null;

  if (!session) {
    return (
      <main>
        <div>
          <h1>You aren't signed in</h1>
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        <h1>Hi</h1>
        <p>{content}</p>
      </div>
    </main>
  );
}