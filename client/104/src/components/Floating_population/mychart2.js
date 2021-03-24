import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";
class floatingPopulationScatterChart extends Component {
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
            .then(response => {
                try {
                    this.setState({ responseFPList: response });
                    this.setState({ append_FPList: this.state.responseFPList.data.entry });
                } catch (error) {
                    alert(error)
                }
            })
            .catch(error => { alert(error); return false; });
    }
    render() {
        return (
            <ScatterChart
                width={1000}
                height={300}
                margin={{
                    top: 5, right: 50, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid />
                <XAxis type="number" dataKey="연령" name="연령" unit="세" />
                <YAxis type="number" dataKey="통화비율(시군구내)" name="통화비율" unit="%" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.state.append_FPList} fill="#003458" />
            </ScatterChart>
        );
    }
} export default floatingPopulationScatterChart;