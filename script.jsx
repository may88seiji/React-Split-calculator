var Split = React.createClass({
    getInitialState:function(){
        return{total:0,
               people:0,
               result:''};
    },

    handleOnChangeTotal:function(event){
        this.setState({
            total: event.target.value
        });
    },

    handleOnChangePeople:function(event){
        this.setState({
            people: event.target.value
        });
    },

    caluculate:function(){
            var price = this.state.total;
            var num = this.state.people;
            var x1, x2, y1, y2;
            var unit = 100;
            var resultMoney;
            if (price.match(/^[1-9][0-9]*$/) && num.match(/^[1-9][0-9]*$/)) {
                if (price % num === 0) {
                    resultMoney = '一人 ' + (price / num) + ' 円';
            this.setState({result:resultMoney});
                } else {
                    x1 = Math.floor(price / num / unit) * unit;
                    y1 = price - (x1 * num);
                    x2 = Math.ceil(price / num / unit) * unit;
                    y2 = Math.abs(price - (x2 * num));
                    resultMoney =
                    '一人 ' + x1 + ' 円だと ' + y1 + ' 円足りません。' +
                    '一人 ' + x2 + ' 円だと ' + y2 + ' 円余ります。';
                    this.setState({result:resultMoney});
                }
            } else {
                    resultMoney = 'error';
                    this.setState({result:resultMoney});
            }
    },

    render:function(){
        return(
            <div>
                <p>割り勘電卓</p>
                <div>
                    <p>合計</p>
                    <input type='text' placeholder='0' onChange={this.handleOnChangeTotal} /> 円
                </div>
                <div>
                    <p>人数</p>
                    <input type='text' placeholder='0' onChange={this.handleOnChangePeople} /> 人
                </div>
                <input type='button' value='計算する' onClick={this.caluculate} />
                <div className='result'>{this.state.result}</div>
            </div>
        );
    }
});

ReactDOM.render(
  <Split />,
  document.getElementById('root')
);