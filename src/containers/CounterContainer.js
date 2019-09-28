import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';

// 리덕스 스토어와 연동된 컨테이너 컴포넌트
const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// 1. cennect 함수의 mapStateToProps, mapDispatchToProps 선언
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(CounterContainer);

// 2. connect 함수 내부에 익명 함수 형태로 선언
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch => ({
//         increase: () => dispatch(increase()),
//         decrease: () => dispatch(decrease()),
//     })
// )(CounterContainer);

// 3. 액션이 많아 질때 bindActionCreators 유틸 함수 사용
// export default connect(
//     state => ({
//         number: state.counter.number,
//     }),
//     dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         ),
// )(CounterContainer);

//4. mapDispatchToProps에 해당하는 파라미터를 액션 생성 함수 객체로 입력
//   내부적으로 bindActionCreators 작업 해줌
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease
    }
)(CounterContainer);
