import React, { Component, Fragment } from 'react';
import IconSkills from './IconSkills';
import ItemSkills from './ItemSkills';

class BoxSkills extends Component {
    render() {
        console.log(this.props.boxData.skills);
        const {title, icon} = this.props.boxData;
        const [skill1, skill2, skill3, skill4, skill5] = this.props.boxData.skills;
        return (
            <li className="itemListGeneralSkills">
                <IconSkills icon={icon}/>
                <h3 className="titleGeneralSkill fontTitleSkill">{title}
                </h3>
                <ul className="skillsList fontListSkills">
                    <ItemSkills skill={skill1}/>
                    <ItemSkills skill={skill2}/>
                    <ItemSkills skill={skill3}/>
                    <ItemSkills skill={skill4}/>
                    <ItemSkills skill={skill5}/>
                </ul>
            </li>
        );
    }
}

export default BoxSkills;