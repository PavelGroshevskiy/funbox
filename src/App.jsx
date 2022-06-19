import CatCard from "./components/CatCard";
import "./scss/app.scss";

function App() {
  return (
    <div className="App">
      <h1 className="topic" style={{ color: "#fff" }}>
        Ты сегодня покормил кота?
      </h1>
      <CatCard
        borderColor={"#1698d9"}
        tasty={"фуа-гра"}
        portion={"10"}
        countMouse={1}
        weight={"0,5"}
      >
        Чего сидишь? Порадуй котэ
      </CatCard>
      <CatCard
        borderColor={"#d91667"}
        tasty={"рыбой"}
        portion={"40"}
        countMouse={2}
        weight={"2"}
        cicleColor="#d91667"
      >
        {" "}
        Головы щучьи с чесноком да свежайшая семгушка
      </CatCard>

      <CatCard
        borderColor={"#b3b3b3"}
        tasty={"курочкой"}
        portion={"100"}
        countMouse={5}
        weight={"5"}
        cicleColor="#b3b3b3"
        satisfied
        disabled
      >
        {" "}
        Печалька, с курой закончился
      </CatCard>
    </div>
  );
}

export default App;
