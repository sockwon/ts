type SuperPrintT = {
  <T, M>(arr: T[], b: M): T; //제너릭을 사용함. 일일이 오버로드 추가해줄 필요가 없다.
};

const superPrintT: SuperPrintT = (arr, b) => {
  console.log(arr[0], b);
  return arr[0];
};

superPrintT([1, 2, 3], "hello world");
superPrintT([true, "ggg"], true);
superPrintT(["gjgjgj", "gg", false], "ppoo");

/*
any 사용과 무슨 차이가 있냐고 물을 수 있다. 하늘과 땅만큼 차이가 난다. any 는 타입스크립트가 제공하는
모든 보호를 집어던졌다. 즉 오류를 미리 잡아주지 않는다. 제너릭은 타입스트립트가 타입을 알아서
추론한다. 그리고 보호기능을 제공한다. 오류를 미리 집어서 보여준다. 컴파일 안된다고 알려주기 때문에
실행 때 오류를 보지 않아도 된다.
위와 같이 여러개의 파라미터에도 동시에 제너릭을 적용할 수 있다. 
*/
