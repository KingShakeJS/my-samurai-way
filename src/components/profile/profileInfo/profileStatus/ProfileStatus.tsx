import * as React from 'react';

type ProfileStatusProps = {
    status: string
};

export class ProfileStatus extends React.Component<ProfileStatusProps> {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }

    render() {
        let {status} = this.props;


        return (
            <div>


                {
                    this.state.editMode
                        ? (
                            <div>
                                <input
                                    autoFocus={true}
                                    onBlur={this.deactivateEditMode}
                                    value={status}
                                    type="text"
                                />
                            </div>
                        )
                        : (
                            <div>
                                <span
                                    onDoubleClick={this.activateEditMode}
                                >{status}</span>
                            </div>
                        )
                }


            </div>
        );
    }
}