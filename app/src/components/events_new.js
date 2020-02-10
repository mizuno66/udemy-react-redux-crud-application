import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, submit } from 'redux-form'
import { Link } from 'react-router-dom'

import { postEvent } from '../actions'

class EventsNew extends Component {
  constructor(props){
    super(props)
    // 決まり文句（バインド処理）
    this.onSubmit = this.onSubmit.bind(this)
  }

  renderField(field) {
    const { input, label, type, meta: { touched, error } } = field

    return (
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span>{ error }</span>}
      </div>
    )
  }

  async onSubmit(values){
    await this.props.postEvent(values)
    this.props.history.push('/')
  }

  render(){
    // pristine : 何も触っていない状態を示す
    // submitting : submitが押された状態を示す（submitの連続押下を防ぐ）
    const { handleSubmit, pristine, submitting } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field label="Title" name="title" type="text" component={ this.renderField } />
        </div>
        <div>
          <Field label="Body" name="body" type="text" component={ this.renderField } />
        </div>

        <div>
          <input type="submit" value="Submit" disabled={ pristine || submitting } />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  return errors
}
const mapDispatchToProps = ({ postEvent })

// ReduxFormでデコレート
export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)
