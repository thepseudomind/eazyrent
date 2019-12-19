import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PaymentPage.css';
import BackButton from '../../components/BackButton/BackButton';
import Banks from '../../components/Banks/Banks';
import FloatingButton from '../../components/FloatingButton/FloatingButton';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import { addToBank, changeForm, resetAlertBox, retrieveState, editBank, overwriteBank, deleteBank } from '../../actions/actions';
import AlertBox from '../../components/AlertBox/AlertBox';

const mapStateToProps = state => ({
    form: state.bankReducers.form,
    alert: state.bankReducers.alert,
    banks: state.bankReducers.banks,
    bankToEdit: state.bankReducers.bankToEdit
});

const mapDispatchToProps = dispatch => ({
    retrieveBanks: (parseState)=> dispatch(retrieveState(parseState)),
    changeForm : (formAction)=> dispatch(changeForm(formAction)),
    addToBank: (newBank) => dispatch(addToBank(newBank)),
    editBank: (bankID)=> dispatch(editBank(bankID)),
    overwriteBank: (bank)=> dispatch(overwriteBank(bank)),
    deleteBank: (bankID)=> dispatch(deleteBank(bankID)),
    resetAlertBox: () => dispatch(resetAlertBox())
});

class PaymentPage extends Component{
    componentDidMount(){
        this.props.retrieveBanks(JSON.parse(localStorage.getItem('bank')));        
    }

    render(){
        const {form, alert, banks, changeForm, addToBank, editBank, bankToEdit, overwriteBank, deleteBank, resetAlertBox} = this.props;
        return (
            <div>
                <BackButton text={'Back to listing'}/>
                <AlertBox message={alert}/>
                <div className="app__main--content">
                    <div className="app__main--details">
                        <Banks banks={banks} action={changeForm} edit={editBank} reset={resetAlertBox} deleteBank={deleteBank}/>
                    </div>
                    <div className="app__main--details">
                        <PaymentForm form={form} action={changeForm} addToBank={addToBank} banks={banks} bankToEdit={bankToEdit} overwriteBank={overwriteBank}/>
                    </div>
                </div>
                {form === '' ? <FloatingButton action={changeForm} reset={resetAlertBox}/> : <span></span>}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentPage);


// class PaymentPage extends Component{
//     constructor(){
//         super()
//         this.state = {
//             form : '',
//             banks : [
//                 new Bank('Sterling Bank', '2357810094', 'current', '256092341625', 'verified')
//             ],
//             bankToEdit : {}
//         }
//     }

//     addBank = ()=>{
//         if(this.state.banks.length >= 3){
//             console.log('You cannot add any more banks');
//         }else{
//             this.setState({form: 'add'});
//         }
//     }

//     editBank = (e)=>{
//         if(e.target.className === 'bank__content'){
//             const bankID = e.target.parentNode.id;
//             this.setState({form: 'edit', bankToEdit: this.state.banks[bankID]});
//             console.log(this.state.banks[bankID]); 
//         } else if(e.target.closest('.bank__content')){
//             const bankID = e.target.parentNode.parentNode.id;
//             this.setState({form: 'edit', bankToEdit: this.state.banks[bankID]});
//             console.log(this.state.banks[bankID]);
//         }else if(e.target.className === 'bank active' || e.target.className === 'bank inactive'){
//             const bankID = e.target.id;
//             this.setState({form: 'edit', bankToEdit: this.state.banks[bankID]});
//             console.log(this.state.banks[bankID]);
//         }
//     }

//     closeForm = ()=>{
//         this.setState({form: ''});
//     }

//     submitForm = (newDetails, instruction) =>{
//         if(instruction === 'add'){
//             const newBank = new Bank(newDetails.bank, newDetails.account, newDetails.type, newDetails.bvn, 'under review');
//             for (let bank of this.state.banks) {
//                 if(newBank.account !== bank.account){
//                     this.state.banks.push(newBank);
//                     this.setState({
//                         form: '',
//                         banks : this.state.banks
//                     });
//                 }else{
//                     console.log('Account number already exists');
//                 }
//             }
//         }
//         // for (let bank of this.state.banks) {
//         //     if(newBank.account !== bank.account){
//         //         this.state.banks.push(newBank);
//         //         this.setState({
//         //             form: '',
//         //             banks : this.state.banks
//         //         });
//         //     }else{
//         //         console.log('No changes made');
//         //         bank = newBank;
//         //         this.setState({
//         //             form: '',
//         //             banks : this.state.banks
//         //         });
//         //     }
//         // }
//     }

//     render(){
//         return (
//             <div>
//                 <BackButton text={'Back to listing'}/>
//                 <div className="app__main--content">
//                     <div className="app__main--details">
//                         <Banks banks={this.state.banks} editBank={this.editBank}/>
//                     </div>
//                     <div className="app__main--details">
//                         <PaymentForm form={this.state.form} edit={this.state.bankToEdit} closeForm={this.closeForm} submitForm={this.submitForm}/>
//                     </div>
//                 </div>
//                 {this.state.form === '' ? <FloatingButton addBank={this.addBank}/> : <span></span>}
//             </div>
//         );
//     }
// }