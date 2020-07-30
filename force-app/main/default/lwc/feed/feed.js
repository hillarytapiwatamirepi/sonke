import { LightningElement } from "lwc";

export default class CheckboxGroupBasic extends LightningElement {
  value = [0];
  categories = ["Groceries", "Walk a dog", "Health"];

  name = "Hillary Tamirepi";
  request = "Condo to rent, looking for roommates";
  price = "$3,000";

  sample_request = {
    name: "Brian",
    category: "Health",
    location: "Tampa, FL",
    details: "I need someone to walk my dog"
  };

  get requests() {
    let reqs = [];
    while (i < 10) {
      text += "The number is " + i;
      i++;
      reqs.push(copy(this.sample_request));
    }

    return reqs;
  }

  get options() {
    let res = [];
    this.categories.forEach((item, index) => {
      res.push({ label: item, value: index });
    });
    return res;
  }

  get selectedValues() {
    return this.value.join(",");
  }

  handleChange(e) {
    this.value = e.detail.value;
    console.log("this is current value", this.value);
  }
}
