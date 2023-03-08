import { faker } from "@faker-js/faker";
import moment from "moment/moment";
/*
hire = {
    "id": hhash,
    "pid": pid,
    "de": date_employed.strftime(%Y-%m-%d),
    "t": htype,
}
*/
const GEN_AMOUNT = 100000
export default function generate() {
  console.time(`gen-${GEN_AMOUNT}`);
  const result = [];
  
  
  for (let i = 0; i < GEN_AMOUNT  ; i++) {
    const obj = {
      id: faker.datatype.number(),
      pid: faker.datatype.number(),
      de: moment(faker.datatype.datetime()).format("YYYY-DD-MM"),
      t: faker.helpers.arrayElement([1, 2]),
    };
    result.push(obj);
    
  }
  
  console.timeEnd(`gen-${GEN_AMOUNT}`);
  return result;
}

