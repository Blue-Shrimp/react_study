import React, { Component } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class floatingPopulationComposedChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002350&TDCAccessKey=3dfa6c8f64ac8a289ea752b54a5965b6c6c474271e2a7c69cc5c7686521f2bd5', {
        })
        .then( response => {
            try {
                this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.state.responseFPList.data.entry });
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
    }

    render () {
        return (
            <ComposedChart
              width={1000}
              height={300}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid stroke="#003458" />
              <XAxis dataKey="중분류" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="통화비율(시군구내)" fill="#82ca9d" />
              <Line type="monotone" dataKey="통화비율(시군구내)" stroke="#ff7300" />
            </ComposedChart>
          );
    }
}

export default floatingPopulationComposedChart;