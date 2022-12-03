
function printDeviceInfo(name : string, version : string){

  console.log(`${name} and ${version}`);
}

printDeviceInfo("HP Printer", "10.1");

type DeviceInfo = {
  name: string,
  version: string
}

function printDeviceInfo2(deviceInfo : DeviceInfo){

  console.log(`${deviceInfo.name} and ${deviceInfo.version}`);
}

let samsungMobileDevice = {
  name: "Samsung",
  version: "100.15"
}

printDeviceInfo2(samsungMobileDevice);

interface Laptop{
  name: string,
  model: string,
  price: number
}


function printLaptop(laptop : Laptop){

  console.log(`${laptop.name}, ${laptop.model} and ${laptop.price}`);
}

let lenovaLaptop = {
  name: "Lenovo Laptop",
  model: "New Model",
  price: 12345
}
printLaptop(lenovaLaptop);