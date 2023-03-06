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



function generate() {
  const result = []
  for(let i =0; i < 100; i++){
    const obj = {
      id : faker.datatype.number(),
      pid : faker.datatype.number(),
      de: moment(faker.datatype.datetime()).format("YYYY-DD-MM"),
      t: faker.helpers.arrayElement([1,2])
    }
    result.push(obj);
  }

  return result


}

module.exports = generate;
