import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {Form, Input, Button, Select, Radio, InputNumber, Switch, DatePicker, Modal } from "antd";
import './App.css';

class App extends React.Component {
  state = {
    modal2Visible: false,
    modal1Visible: false,
    modal3Visible: false,
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }
  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }
  setModal3Visible(modal3Visible) {
    this.setState({ modal3Visible });
  }
  



  render() {
    return (
      <>
        
        <Modal style = {
          {
            color: "blue",
          }
        }
          title="Tier 1 Capital"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
           <Form
           layout="vertical"
      
      labelCol={{
        span: 20
      }}
      wrapperCol={{
        span: 25
      }}
    >
      <Form.Item label="Name">
       <Input/>
      </Form.Item>
      <Form.Item label="Description">
        <Input />
      </Form.Item>
      <Form.Item label="Owner">
        <Input />
      </Form.Item>

      <Form.Item label="Next Review Date">
      <DatePicker />
      </Form.Item>

      <Form.Item label="Unit of Measurement">
      <Input />
      </Form.Item>

      <Form.Item name="radio-group" label="Lead/Lag">
      <Radio.Group>
        <Radio value="a">Lead</Radio>
        <Radio value="b">Lag</Radio>
        
      </Radio.Group>
    </Form.Item>

      <Form.Item label="Active">
      <Switch />
      </Form.Item>
      <hr></hr>

      <Form.Item label="KPI Capture Method">
        <br/>
        
      <Form.Item name="radio-group" label="" >
      <Radio.Group>
        <Radio value="a">Manual</Radio>
        <Radio value="b">External System</Radio>
        <Radio value="c">Calculation</Radio>
      </Radio.Group>
    </Form.Item>
    </Form.Item>

        <Form.Item label="Value">
        <Input />
      </Form.Item>
      <Form.Item label="Approvers">
      <Select>
          <Select.Option value="">A</Select.Option>
          <Select.Option value="">B</Select.Option>
          <Select.Option value="">c</Select.Option>
       </Select>
      </Form.Item>
      <Form.Item label="Frequency Pattern">
    
      <Select>
          <Select.Option value="">A</Select.Option>
          <Select.Option value="">B</Select.Option>
          
        </Select>
      </Form.Item>
      
      <Form.Item label="Select Days" name="layout">
        <Radio.Group>
        <Radio.Button value="sun">Sun</Radio.Button>
        <Radio.Button value="mon">Mon</Radio.Button>
        <Radio.Button value="tue">Tue</Radio.Button>
        <Radio.Button value="wed">Wed</Radio.Button>
        <Radio.Button value="thurs">Thurs</Radio.Button>
        <Radio.Button value="fri">Fri</Radio.Button>
        <Radio.Button value="sat">Sat</Radio.Button> 
      </Radio.Group>
      </Form.Item>

      <Form.Item label="">
        Notify <InputNumber /> days early
      </Form.Item>

      <hr></hr>

      
        
      <Button type="primary" size="middle" onClick={() => this.setModal1Visible(true)}
      style={
        {marginLeft:'170px', }
      }>View the Formula</Button>
      
          <Modal
          title="KPI Formula"
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >

        </Modal><br/><br/>

      
      <Button type="primary" size="large" onClick={() => this.setModal3Visible(true)}
      style={
        {marginLeft:'140px', }
            }
        >View Notification Rules</Button>
          <Modal
          title="Notification Rules"
          centered
          visible={this.state.modal3Visible}
          onOk={() => this.setModal3Visible(false)}
          onCancel={() => this.setModal3Visible(false)}
        >

        </Modal><br/><br/>


      
    </Form>

        </Modal>
    
        <Button type="primary" size="large" class="myButton" onClick={() => this.setModal2Visible(true)}
        style={
          {marginLeft:'650px',}
        }
          >Add
        </Button>
      
        

      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));


export default App;