import { Text, View, Alert, Dimensions, Button } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react'
import TxtInput from './TxtInput'
import DatePicker from 'react-native-datepicker'
let deviceWidth = Dimensions.get('window').width

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      name: null,
      date: null,
      phone: null,
      email: null,
      address: null,
      gender: null
    }
  }
  // check if all fields are present
  checkData() {
    if (this.state.name == null) {
      Alert.alert("Enter a name")
    } else if (this.state.date == null) {
      Alert.alert("Enter Date")
    } else if (this.state.date == null) {
      Alert.alert("Enter date of birth")
    } else if (this.state.phone == null) {
      Alert.alert("Enter a phone number")
    } else if (this.mobileValidate(this.state.phone) === false) {
      Alert.alert("Enter a valid Phone number")
    } else if (this.state.email == null) {
      Alert.alert("Enter an Email")
    } else if (this.emailValidate(this.state.email) === false) {
      Alert.alert("Enter a valid Email")
    } else {
      console.log("add");
      this.addData();
    }
  }
  // adding data
  addData = () => {
    let data = { name: this.state.name, date: this.state.date, phone: this.state.phone, email: this.state.email, address: this.state.address, gender: this.state.gender }
    this.setState({ data: [...this.state.data, data] })
    Alert.alert("Data added")
  }
  // validating email
  emailValidate = (text) => {
    console.log("++++++++++++", text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log(reg.test(text))
    if (reg.test(text) === false) {
      return false;
    }
    else {
      return true;
    }
  }
  // validating mobile number
  mobileValidate(text) {
    const reg = /^[0]?[6789]\d{9}$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  }
  getWidth(percentage) {
    return deviceWidth * (percentage / 100);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", padding: 15, backgroundColor: "white" }}>
        <TxtInput title={"Name"} value={this.state.name} press={(value) => this.setState({ name: value })} />
        <TxtInput title={"phone"} value={this.state.phone} press={(value) => this.setState({ phone: value })} keyboard={'numeric'} />
        <TxtInput title={"email"} value={this.state.email} press={(value) => this.setState({ email: value })} />
        <TxtInput title={"address"} value={this.state.address} press={(value) => this.setState({ address: value })} />
        <DatePicker
            style={{ width: "100%" }}
            date={this.state.date}
            mode="date"
            placeholder="Date of birth"
            format="YYYY-MM-DD"
            minDate={new Date()}
            maxDate="3000-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
              dateIcon: {
              },
              dateInput: {
                alignItems: 'baseline',
                paddingLeft: 15,
                backgroundColor: "white",
                borderRadius: 12,
              },
              placeholderText: {
                fontSize: 14,
                color: 'black'
              }
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />
        <View style={{ borderBottomRightRadius: 12, borderTopRightRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: "white", marginVertical: 8, width: "100%" }}>
          <Picker
            selectedValue={this.state.gender}
            style={{ height: 45, opacity: .5, height: 40, marginHorizontal: 12 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
          
        </View>
        <View style={{marginTop: 20}}>
        <Button
          onPress={()=>{this.checkData()}}
          title="Save"
          color="#841584"
        />
        </View>
      </View >
    )
  }
}

export default App