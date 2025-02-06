export default function CommunityTreasureGame() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [message, setMessage] = useState("אסוף תרומות מהקהילה בלבד!");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const collectItem = (type) => {
    if (type === "community") {
      setScore(score + 10);
      setMessage("מעולה! הבית חב""ד מתקיים בזכותך!");
    } else {
      setScore(score - 10);
      setMessage("בית חב""ד אינו נתמך מבחוץ! אסוף רק תרומות מהקהילה!");
    }
  };

  return (
    <div className="game-container p-4 text-center">
      <h1 className="text-xl font-bold">האוצר הקהילתי</h1>
      <p className="text-md">{message}</p>
      <p className="text-lg">זמן שנותר: {timeLeft} שניות</p>
      <p className="text-lg">ניקוד: {score}</p>
      <div className="flex justify-center gap-4 mt-4">
        <button className="p-2 bg-green-500 text-white rounded" onClick={() => collectItem("community")}>
          אסוף תרומה מקומית
        </button>
        <button className="p-2 bg-red-500 text-white rounded" onClick={() => collectItem("foreign")}>
          אסוף "תרומה" מחו"ל
        </button>
      </div>
      {timeLeft === 0 && <p className="text-xl font-bold mt-4">המשחק הסתיים! תרמת {score} ש"ח לבית חב""ד!</p>}
    </div>
  );
}
