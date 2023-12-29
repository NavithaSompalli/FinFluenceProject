import { Component } from "react" 

// import { RiArrowDropDownLine } from "react-icons/ri";



import LearningCenter from '../EducationalResources/LearningCenter'
import CommunityInsights from '../EducationalResources/CommunityInsights'
import HelpCenter from '../EducationalResources/HelpCenter'
import CustomerSupport from '../EducationalResources/CustomerSupport'

import './index.css'



  

class EducationalResources extends Component{
    state = {
        isEduResActive: false,
        isLearningActive:false,
        isCommunityActive: false, 
        isSupAndAssActive:false,
        isHelpCenterActive:false,
        isCustomerSupportActive:false, 
    } 

    onClickEduResource = () =>{
        this.setState(prevState => ({isEduResActive: !prevState.isEduResActive}))
    }


   /* onClickLearning = () =>{
        this.setState(prevState => ({isLearningActive: !prevState.isLearningActive}))
        
    }

    onClickCommunityInsight = () =>{
        this.setState(prevState =>({isCommunityActive: !prevState.isCommunityActive}))
        
    }*/

    onClickLearning = () =>{
        this.setState({isLearningActive: true})
        this.setState({isCommunityActive:false})
        this.setState({isHelpCenterActive: false})
        this.setState({isCustomerSupportActive:false})
        
    }

    onClickCommunityInsight = () =>{
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:true})
        this.setState({isHelpCenterActive: false})
        this.setState({isCustomerSupportActive:false})
    }

    onClickSupportAndAssistance = () =>{
        this.setState(prevState =>({isSupAndAssActive: !prevState.isSupAndAssActive}))
    }

    onClickHelpCenter = () =>{
        this.setState({isHelpCenterActive: true})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
        this.setState({isCustomerSupportActive:false})
    }

    onClickCustomerSupport = () =>{
        this.setState({isCustomerSupportActive:true})
        this.setState({isHelpCenterActive: false})
        this.setState({isLearningActive: false})
        this.setState({isCommunityActive:false})
    }


    render(){
        const {isEduResActive, isLearningActive,isCommunityActive,isSupAndAssActive,isCustomerSupportActive,isHelpCenterActive} = this.state

        return(
            <div className="edu-bg-container">
                <div className="dash-board-container">
                    <button className="edu-main-heading" type="button" onClick={this.onClickEduResource}>Educational Resources</button> 
                    {isEduResActive &&<ul>
                        <li className="learning" onClick={this.onClickLearning}>Learning center</li>
                        <li className="learning" onClick={this.onClickCommunityInsight}>Community Insights</li>
                    </ul>}
                    <button className="edu-main-heading" type="button" onClick={this.onClickSupportAndAssistance}>Support and Assistance</button>
                    {isSupAndAssActive &&<ul>
                        <li className="learning" onClick={this.onClickHelpCenter}>Help center</li>
                        <li className="learning" onClick={this.onClickCustomerSupport}>Customer Support</li>
                    </ul>}
                </div> 
                <div>{isLearningActive&&<LearningCenter/>}</div> 
                <div>{isCommunityActive&&<CommunityInsights isLearningActive ={this.isCommunityActive}/>}</div> 
                <div>{isHelpCenterActive && <HelpCenter/>}</div> 
                <div>{isCustomerSupportActive&&<CustomerSupport/>}</div>

            </div>
        )
    }
}

export default EducationalResources