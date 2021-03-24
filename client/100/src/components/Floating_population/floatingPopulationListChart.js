import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class floatingPopulationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount() {
        this.callFloatPopulListApi()
    }

    callFloatPopulListApi = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002277&'+
        'TDCAccessKey=f7c857088da5680d9cbbaf992adb71d391250f415151f4fcc7bd0801bb0d7fa4&$count=5', {
        })
        .then( response => {
            try {
                this.setState({ responseFPList: response });
                this.FloatPopulListAppend()
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
}

FloatPopulListAppend = () => {
    var FPList = this.state.responseFPList.data
    var jsonString = JSON.stringify(FPList)
    var json = JSON.parse(jsonString)
    this.setState({ append_FPList: json.entry });
}


    render () {
        return (
            <LineChart
              width={500}
              height={300}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="군구" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="유동인구수" stroke="#82ca9d" />
            </LineChart>
          );
    }
}

export default floatingPopulationList;