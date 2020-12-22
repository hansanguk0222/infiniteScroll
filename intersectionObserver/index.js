const data = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "aa",
  "bb",
  "cc",
  "dd",
  "ee",
  "ff",
  "gg",
  "hh",
  "ii",
  "jj",
  "kk",
  "ll",
  "mm",
  "nn",
  "oo",
  "pp",
  "qq",
  "rr",
  "ss",
  "tt",
  "uu",
  "vv",
  "ww",
  "xx"
];

let start = 0;

const getData = () => {
  return data.slice(start, start + 10);
};

const createNewElement = data => {
  const newElement = document.createElement("div");
  newElement.className = "item";
  newElement.textContent = data;
  return newElement;
};

const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createDataList();
      observer.unobserve(entry.target);
      console.log("화면에서 보여짐");
    } else {
      console.log("화면에서 제외됨");
    }
  });
};

const createObserver = (target, lastElement) => {
  const options = {
    root: target,
    threshold: 0.8
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(lastElement);
};

const createDataList = () => {
  const target = document.querySelector("#box");
  const newData = getData(start);
  newData.map((data, idx) => {
    const newElement = createNewElement(data);

    target.appendChild(newElement);

    if (idx === 9) {
      createObserver(target, newElement);
    }
  });
  start += 10;
};

const IntersectionObserverFetch = () => {
  const target = document.querySelector("#box");
  createDataList();

  target.addEventListener("load", () => {
    createDataList();
  });
};

IntersectionObserverFetch();
