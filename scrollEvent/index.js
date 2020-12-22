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

const getData = start => {
  return data.slice(start, start + 10);
};

const getScrollTop = target => {
  return target.scrollTop;
};

const getScrollHeight = target => {
  return target.scrollHeight;
};

const getClientHeight = target => {
  return target.clientHeight;
};

const createNewElement = data => {
  const newElement = document.createElement("div");
  newElement.className = "item";
  newElement.textContent = data;
  return newElement;
};

const createDataList = target => {
  const newData = getData(start);
  newData.map(data => {
    const newElement = createNewElement(data);

    target.appendChild(newElement);
  });
  start += 10;
};

const handleScroll = target => {
  console.log("event 발생!");
  if (getScrollTop(target) + getClientHeight(target) + 1 >= getScrollHeight(target)) {
    createDataList(target);
  }
};

const scrollFetch = () => {
  const target = document.querySelector("#box");
  let isThrottle = false;
  createDataList(target);

  target.addEventListener("scroll", () => {
    if (!isThrottle) {
      isThrottle = setTimeout(() => {
        handleScroll(target);
        isThrottle = false;
      }, 500);
    }
  });
};

scrollFetch();
