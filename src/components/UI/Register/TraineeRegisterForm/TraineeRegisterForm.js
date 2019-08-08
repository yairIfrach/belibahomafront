import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  Spinner,
  Col,
  Row,
  Jumbotron
} from "react-bootstrap";
import TextValidator from "../../../Validators/TextValidator/TextValidator";
import { ValidatorForm } from "react-form-validator-core";
import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import DynamicSelectBox from "./../../../../containers/DynamicSelectBox/DynamicSelectBox";
import config from "react-global-configuration";
import _ from "lodash";
import FormCheckInput from "react-bootstrap/FormCheckInput";

export default class TraineeRegisterForm extends Component {
  state = {
    isAdditionalStudyPath: false,
    id: "",
    fname: "",
    lname: "",
    email: "",
    password: "",
    phoneA: "",
    phoneB: "",
    birthDate: Date.now(),
    gender: "",
    maritalStatus: "",
    activityArea: "",
    institute: "",
    mainStudy: "",
    secondaryStudy: "",
    academicPlan: "מכינה/בגרויות",
    studyYear: "",
    bankAccount: {
      bankName: "",
      branchNumber: "",
      accountNumber: ""
    },
    realAddress: {
      street: "",
      city: "",
      neighborhood: ""
    },
    currentAddress: {
      street: "",
      city: "",
      neighborhood: ""
    },
    religiousStatus: "",
    religiousText: "",
    unavailableTimes: [
      { day: 1, Time: { start: Date.now(), end: Date.now() } }
    ],
    notes: "",
    stuffNotes: "",
    isNeedAdditionalRelation: false,
    activeStatus: "",
    isFinnishPreparatory: false,
    isGraduated: false,
    isFoundJob: false,
    isJobInStudyFelid: false,
    // until here is the common part
    isInMagid: false,
    isLiveInSelectedCities: false,
    isRegisteredToKivun: false,
    needsHelpIn: "",
    workStatus: "",
    workTitle: "",
    isLearnedInYeshiva: false,
    yeshivaTimes: "",
    isHaveAnotherProfessionalTraining: false,
    previousProfession: "",
    isHaveAnotherDegree: false,
    previousDegree: "",
    WantDetailsAbout: {
      personalTraining: false,
      jobSeeking: false,
      professionalTraining: false,
      englishCourse: false,
      computerCourse: false,
      studyDiagnostics: false,
      selfAdvanceProgram: false,
      entrepreneurship: false,
      shortTermPreparatory: false
    },
    isServed: false,
    mathLevel: 0,
    englishLevel: 0,
    physicsLevel: 0,
    additionalTopics: "",
    isActive: false,
    leavingReason: "",
    isDropped: false
  };

  handleIdChanged = event => {
    this.setState({ id: event.target.value });
  };
  handleFnameChanged = event => {
    this.setState({ fname: event.target.value });
  };
  handleLnameChanged = event => {
    this.setState({ lname: event.target.value });
  };
  handleEmailChanged = event => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChanged = event => {
    this.setState({ password: event.target.value });
  };
  handlePhoneAChanged = event => {
    this.setState({ phoneA: event.target.value });
  };
  handlePhoneBChanged = event => {
    this.setState({ phoneB: event.target.value });
  };
  handleBirthDateChanged = value => {
    this.setState({ birthDate: value });
  };
  handleGenderChanged = event => {
    this.setState({ gender: event.target.value });
  };

  handleMaritalStatusChanged = event => {
    this.setState({ maritalStatus: event.target.value });
  };
  handleActivityAreaChanged = event => {
    this.setState({ activityArea: event.target.value });
  };
  handleInstituteChanged = event => {
    this.setState({ institute: event.target.value });
  };
  handleMainStudyChanged = event => {
    this.setState({ mainStudy: event.target.value });
  };
  handleSecondaryStudyChanged = event => {
    this.setState({ secondaryStudy: event.target.value });
  };
  handleAcademicPlanChanged = event => {
    this.setState({ academicPlan: event.target.value });
  };
  handleStudyYearChanged = event => {
    this.setState({ studyYear: event.target.value });
  };
  handleBankAccountChanged = event => {
    this.setState({ bankAccount: event.target.value });
  };
  handleBankNameChanged = event => {
    this.setState({ bankName: event.target.value });
  };
  handleBranchNumberChanged = event => {
    this.setState({ branchNumber: event.target.value });
  };
  handleAccountNumberChanged = event => {
    this.setState({ accountNumber: event.target.value });
  };
  handleRealStreetChanged = event => {
    this.setState({ street: event.target.value });
  };
  handleRealCityChanged = event => {
    this.setState({ city: event.target.value });
  };
  handleRealNeighborhoodChanged = event => {
    this.setState({ neighborhood: event.target.value });
  };
  handleCurrentStreetChanged = event => {
    this.setState({ street: event.target.value });
  };
  handleCurrentCityChanged = event => {
    this.setState({ city: event.target.value });
  };
  handleCurrentNeighborhoodChanged = event => {
    this.setState({ neighborhood: event.target.value });
  };
  handleReligiousStatusChanged = event => {
    this.setState({ religiousStatus: event.target.value });
  };
  handleReligiousTextChanged = event => {
    this.setState({ religiousText: event.target.value });
  };

  addUnavailableTime = () => {
    let tmpArr = _.cloneDeep(this.state.unavailableTimes);
    tmpArr.push({ day: 1, Time: { start: Date.now(), end: Date.now() } });
    this.setState({ unavailableTimes: tmpArr });
  };

  handleUnavailableTimesChanged = (event, index, type) => {
    let tmpUnavailableTimes = _.cloneDeep(this.state.unavailableTimes);
    let valueToChange = tmpUnavailableTimes[index];
    const newVal = event;
    switch (type) {
      case "day":
        valueToChange = {
          day: newVal.target.value,
          Time: valueToChange.Time
        };
        console.log("day ", valueToChange, newVal.target.value);
        tmpUnavailableTimes[index] = valueToChange;
        break;
      case "start":
        valueToChange = {
          Time: { start: newVal, end: valueToChange.Time.end },
          day: valueToChange.day
        };
        console.log("start ", valueToChange, newVal);
        tmpUnavailableTimes[index] = valueToChange;
        break;
      case "end":
        valueToChange = {
          Time: { start: valueToChange.Time.start, end: newVal },
          day: valueToChange.day
        };
        console.log("end ", valueToChange, newVal);
        tmpUnavailableTimes[index] = valueToChange;
        break;
      case "remove":
        tmpUnavailableTimes = tmpUnavailableTimes.filter((val, i) => {
          return i !== index;
        });
        break;
    }
    this.setState({ unavailableTimes: tmpUnavailableTimes });
  };
  handleNotesChanged = event => {
    this.setState({ notes: event.target.value });
  };
  handleStuffNotesChanged = event => {
    this.setState({ stuffNotes: event.target.value });
  };
  handleIsNeedAdditionalRelationChanged = event => {
    this.setState({ isNeedAdditionalRelation: event.target.value });
  };
  handleActiveStatusChanged = event => {
    this.setState({ activeStatus: event.target.value });
  };
  handleIsFinnishPreparatoryChanged = event => {
    this.setState({ isFinnishPreparatory: event.target.value });
  };
  handleIsGraduatedChanged = event => {
    this.setState({ isGraduated: event.target.value });
  };
  handleIsFoundJobChanged = event => {
    this.setState({ isFoundJob: event.target.value });
  };
  handleIsJobInStudyFelidChanged = event => {
    this.setState({ isJobInStudyFelid: event.target.value });
  };
  handleIsInMagidChanged = event => {
    this.setState({ isInMagid: event.target.value });
  };
  handleIsLiveInSelectedCitiesChanged = event => {
    this.setState({ isLiveInSelectedCities: event.target.value });
  };
  handleIsRegisteredToKivunChanged = event => {
    this.setState({ isRegisteredToKivun: event.target.value });
  };
  handleNeedsHelpInChanged = event => {
    this.setState({ needsHelpIn: event.target.value });
  };
  handleWorkStatusChanged = event => {
    this.setState({ workStatus: event.target.value });
  };
  handleWorkTitleChanged = event => {
    this.setState({ workTitle: event.target.value });
  };
  handleIsLearnedInYeshivaChanged = event => {
    this.setState({ isLearnedInYeshiva: !this.state.isLearnedInYeshiva });
  };
  handleYeshivaTimesChanged = event => {
    this.setState({ yeshivaTimes: event.target.value });
  };
  handleIsHaveAnotherProfessionalTrainingChanged = event => {
    this.setState({
      isHaveAnotherProfessionalTraining: !this.state
        .isHaveAnotherProfessionalTraining
    });
  };
  handlePreviousProfessionChanged = event => {
    this.setState({ previousProfession: event.target.value });
  };
  handleIsHaveAnotherDegreeChanged = event => {
    this.setState({
      isHaveAnotherDegree: !this.state.isHaveAnotherDegree
    });
  };
  handlePreviousDegreeChanged = event => {
    this.setState({ previousDegree: event.target.value });
  };
  handleWantDetailsAboutChanged = str => {
    let tmpWantDetail = _.cloneDeep(this.state.WantDetailsAbout);
    tmpWantDetail[str] = !tmpWantDetail[str];
    this.setState({ WantDetailsAbout: tmpWantDetail });
  };
  handlePersonalTrainingChanged = event => {
    this.setState({ personalTraining: event.target.value });
  };
  handleJobSeekingChanged = event => {
    this.setState({ jobSeeking: event.target.value });
  };
  handleProfessionalTrainingChanged = event => {
    this.setState({ professionalTraining: event.target.value });
  };
  handleEnglishCourseChanged = event => {
    this.setState({ englishCourse: event.target.value });
  };
  handleComputerCourseChanged = event => {
    this.setState({ computerCourse: event.target.value });
  };
  handleStudyDiagnosticsChanged = event => {
    this.setState({ studyDiagnostics: event.target.value });
  };
  handleSelfAdvanceProgramChanged = event => {
    this.setState({ selfAdvanceProgram: event.target.value });
  };
  handleEntrepreneurshipChanged = event => {
    this.setState({ entrepreneurship: event.target.value });
  };
  handleShortTermPreparatoryChanged = event => {
    this.setState({ shortTermPreparatory: event.target.value });
  };
  handleIsServedChanged = event => {
    this.setState({ isServed: !this.state.isServed });
  };
  handleMathLevelChanged = event => {
    this.setState({ mathLevel: event.target.value });
  };
  handleEnglishLevelChanged = event => {
    this.setState({ englishLevel: event.target.value });
  };
  handlePhysicsLevelChanged = event => {
    this.setState({ physicsLevel: event.target.value });
  };
  handleAdditionalTopicsChanged = event => {
    this.setState({ additionalTopics: event.target.value });
  };
  handleIsActiveChanged = event => {
    this.setState({ isActive: event.target.value });
  };
  handleLeavingReasonChanged = event => {
    this.setState({ leavingReason: event.target.value });
  };
  handleIsDroppedChanged = event => {
    this.setState({ isDropped: event.target.value });
  };

  handleSubmit = val => {
    console.log("Submitted", val);
  };
  handleError = obj => {
    console.log(obj);
  };

  unavailableTimesForm = () => {
    return this.state.unavailableTimes.map((obj, index) => {
      return (
        <React.Fragment key={index}>
          <Form.Row dir="rtl">
            <Form.Group as={Col}>
              <Form.Label>אנא בחר יום</Form.Label>
              <Form.Control
                as="select"
                className="mb-2"
                dir="rtl"
                onChange={event => {
                  this.handleUnavailableTimesChanged(event, index, "day");
                }}
                name={"unavailableTimes" + index}
                value={this.state.unavailableTimes[index].day}
              >
                <option value="1">ראשון</option>
                <option value="2">שני</option>
                <option value="3">שלישי</option>
                <option value="4">רביעי</option>
                <option value="5">חמישי</option>
                <option value="6">שישי</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} className="mx-2  text-center" dir="ltr">
              <Form.Label>אנא בחר שעת התחלה</Form.Label>
              <br />
              <TimePicker
                className="mt-1"
                selected={this.state.unavailableTimes[index].Time.start}
                onChange={event => {
                  this.handleUnavailableTimesChanged(event, index, "start");
                }}
                disableClock={true}
                required
              />
              <br />
            </Form.Group>
            <Form.Group as={Col} className="mx-2 text-center" dir="ltr">
              <Form.Label>אנא בחר שעת סיום</Form.Label>
              <br />
              <TimePicker
                className="mt-1"
                selected={this.state.unavailableTimes[index].Time.end}
                onChange={event => {
                  this.handleUnavailableTimesChanged(event, index, "end");
                }}
                disableClock={true}
                required
              />
              <br />
            </Form.Group>
          </Form.Row>
          <Form.Group as={Col} className="text-right align-content-center">
            <Button
              className="btn btn-danger"
              onClick={() =>
                this.handleUnavailableTimesChanged(null, index, "remove")
              }
            >
              מחק זמן
            </Button>
          </Form.Group>
        </React.Fragment>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container className="text-right m-2">
          <Form
            as={ValidatorForm}
            onError={this.handleError}
            ref="form"
            onSubmit={this.handleSubmit}
          >
            <Form.Label>
              מספר תעודת זהות כולל אפסים - ישמש כשם המשתמש בכניסות הבאות לאתר
            </Form.Label>
            <Form.Control
              dir="rtl"
              className="mb-2"
              type="text"
              as={TextValidator}
              onChange={this.handleIdChanged}
              name="id"
              value={this.state.id}
              validators={["required", "matchRegexp:[d]{9}"]}
              errorMessages={["שדה זה הינו חובה", " חייב להכיל 9 מספרים"]}
            />
            <Form.Label>שם פרטי</Form.Label>
            <Form.Control
              dir="rtl"
              type="text"
              as={TextValidator}
              className="mb-2"
              onChange={this.handleLnameChanged}
              name="lname"
              value={this.state.lname}
              validators={["required"]}
              errorMessages={["שדה זה הינו חובה"]}
            />
            <Form.Label>שם משפחה</Form.Label>
            <Form.Control
              dir="rtl"
              type="text"
              as={TextValidator}
              className="mb-2"
              onChange={this.handleFnameChanged}
              name="fname"
              value={this.state.fname}
              validators={["required"]}
              errorMessages={["שדה זה הינו חובה"]}
            />
            <Form.Label>סיסמא</Form.Label>
            <Form.Control
              dir="rtl"
              type="password"
              as={TextValidator}
              className="mb-2"
              onChange={this.handlePasswordChanged}
              name="password"
              value={this.state.password}
              validators={["required"]}
              errorMessages={["שדה זה הינו חובה"]}
            />
            <Form.Label>מספר טלפון ראשי</Form.Label>
            <Form.Control
              dir="rtl"
              type="text"
              as={TextValidator}
              className="mb-2"
              onChange={this.handlePhoneAChanged}
              name="phoneA"
              value={this.state.phoneA}
              validators={["required", "matchRegexp:[0-9]{9}"]}
              errorMessages={["שדה זה הינו חובה", "נא להכניס ספרות בלבד"]}
            />
            <Form.Label>מספר טלפון משני</Form.Label>
            <Form.Control
              dir="rtl"
              type="text"
              as={TextValidator}
              className="mb-2"
              onChange={this.handlePhoneBChanged}
              name="phoneB"
              value={this.state.phoneB}
            />
            <Form.Label>כתובת אימייל</Form.Label>
            <Form.Control
              dir="rtl"
              type="email"
              as={TextValidator}
              className="mb-2"
              onChange={this.handleEmailChanged}
              name="email"
              value={this.state.email}
              validators={["required", "isEmail"]}
              errorMessages={["שדה זה הינו חובה", "נא הכנס כתובת מייל תקנית"]}
            />
            <Form.Label>תאריך לידה</Form.Label>
            <br />
            <DatePicker
              value={new Date(this.state.birthDate)}
              onChange={this.handleBirthDateChanged}
              required
            />
            <br />
            <Form.Label>מגדר</Form.Label>
            <Form.Control
              as="select"
              className="mb-2"
              dir="rtl"
              onChange={this.handleGenderChanged}
              name="gender"
              value={this.state.gender}
            >
              <option value="זכר">זכר</option>
              <option value="נקבה">נקבה</option>
            </Form.Control>
            <Form.Label>מצב משפחתי</Form.Label>
            <Form.Control
              as="select"
              className="mb-2"
              dir="rtl"
              onChange={this.handleMaritalStatusChanged}
              name="maritalStatus"
              value={this.state.maritalStatus}
            >
              <option value="נשוי">נשוי</option>
              <option value="רווק">רווק</option>
              <option value="גרוש">גרוש</option>
              <option value="אלמן">אלמן</option>
              <option value="אחר">אחר</option>
            </Form.Control>
            <Form.Label>איזור פעילות</Form.Label>
            <Form.Control
              as={DynamicSelectBox}
              className="mb-2"
              dir="rtl"
              onChange={this.handleActivityAreaChanged}
              name="activityArea"
              fetchLink={`${config.get("serverAddress")}/api/areas`}
            />
            <Form.Label>מוסד לימודים</Form.Label>
            <Form.Control
              as={DynamicSelectBox}
              className="mb-2"
              dir="rtl"
              onChange={this.handleInstituteChanged}
              name="institute"
              fetchLink={`${config.get("serverAddress")}/api/institutes`}
            />
            <Form.Label>מסלול לימודים ראשי</Form.Label>
            <Form.Control
              as={DynamicSelectBox}
              className="mb-2"
              dir="rtl"
              onChange={this.handleMainStudyChanged}
              name="mainStudy"
              fetchLink={`${config.get("serverAddress")}/api/academicDetails`}
            />
            <Form.Check
              className="my-2"
              type="checkbox"
              label="קיים מסלול לימודים נוסף?"
              onChange={() => {
                this.setState({
                  isAdditionalStudyPath: !this.state.isAdditionalStudyPath
                });
              }}
            />
            {this.state.isAdditionalStudyPath ? (
              <React.Fragment>
                <Form.Label>מסלול לימודים משני</Form.Label>
                <Form.Control
                  as={DynamicSelectBox}
                  className="mb-2"
                  dir="rtl"
                  onChange={this.handleSecondaryStudyChanged}
                  name="secondaryStudy"
                  fetchLink={`${config.get(
                    "serverAddress"
                  )}/api/academicDetails`}
                />
              </React.Fragment>
            ) : null}
            <Form.Label>מסלול אקדמי</Form.Label>
            <Form.Control
              as="select"
              className="mb-2"
              dir="rtl"
              onChange={this.handleAcademicPlanChanged}
              name="academicPlan"
              value={this.state.academicPlan}
            >
              <option value="מכינה/בגרויות">מכינה/בגרויות</option>
              <option value="תואר ראשון">תואר ראשון</option>
              <option value="תואר מתקדם">תואר מתקדם</option>
            </Form.Control>
            {this.state.academicPlan === "תואר ראשון" ? (
              <React.Fragment>
                <Form.Label>שנת לימודים</Form.Label>
                <Form.Control
                  as="select"
                  className="mb-2"
                  dir="rtl"
                  onChange={this.handleStudyYearChanged}
                  name="studyYear"
                  value={this.state.studyYear}
                >
                  <option value="1">א</option>
                  <option value="2">ב</option>
                  <option value="3">ג</option>
                  <option value="4">ד</option>
                  <option value="5">ה</option>
                  <option value="6">ו</option>
                  <option value="7">ז</option>
                  <option value="8">ח</option>
                </Form.Control>
              </React.Fragment>
            ) : null}
            <Form.Label>
              <b>:פרטי בנק</b>
            </Form.Label>
            <br />
            <Form.Row dir="rtl">
              <Form.Group className="m-2">
                <Form.Label>שם בנק</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleBankNameChanged}
                  name="bankName"
                  value={this.state.bankName}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>מספר סניף</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleBranchNumberChanged}
                  name="branchNumber"
                  value={this.state.branchNumber}
                  validators={["required", "matchRegexp:[0-9]"]}
                  errorMessages={["שדה זה הינו חובה", "שדה זה מכיל ספרות בלבד"]}
                />
              </Form.Group>
              <Form.Group className="m-2">
                <Form.Label>מספר חשבון</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleAccountNumberChanged}
                  name="accountNumber"
                  value={this.state.accountNumber}
                  validators={["required", "matchRegexp:[0-9]"]}
                  errorMessages={["שדה זה הינו חובה", "שדה זה מכיל ספרות בלבד"]}
                />
              </Form.Group>
            </Form.Row>
            <Form.Label dir="rtl">
              <b>כתובת כפי שמצוין בת.ז.</b>
            </Form.Label>
            <br />
            <Form.Row dir="rtl">
              <Form.Group className="m-2" as={Col}>
                <Form.Label>רחוב ומספר</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleRealStreetChanged}
                  name="realAddress.street"
                  value={this.state.realAddress.street}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
              <Form.Group className="m-2" as={Col}>
                <Form.Label dir="rtl">עיר/יישוב</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleRealCityChanged}
                  name="realAddress.city"
                  value={this.state.realAddress.city}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
              <Form.Group className="m-2" as={Col}>
                <Form.Label dir="rtl">שכונה</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleRealNeighborhoodChanged}
                  name="realAddress.neighborhood"
                  value={this.state.realAddress.neighborhood}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
            </Form.Row>
            <Form.Label dir="rtl">
              <b>כתובת מגורים בפועל</b>
            </Form.Label>
            <br />
            <Form.Row dir="rtl">
              <Form.Group className="m-2" as={Col}>
                <Form.Label>רחוב ומספר</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleCurrentStreetChanged}
                  name="currentAddress.street"
                  value={this.state.currentAddress.street}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
              <Form.Group className="m-2" as={Col}>
                <Form.Label dir="rtl">עיר/יישוב</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleCurrentCityChanged}
                  name="currentAddress.city"
                  value={this.state.currentAddress.city}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
              <Form.Group className="m-2" as={Col}>
                <Form.Label dir="rtl">שכונה</Form.Label>
                <Form.Control
                  type="text"
                  as={TextValidator}
                  className="mb-2"
                  onChange={this.handleCurrentNeighborhoodChanged}
                  name="currentAddress.neighborhood"
                  value={this.state.currentAddress.neighborhood}
                  validators={["required"]}
                  errorMessages={["שדה זה הינו חובה"]}
                />
              </Form.Group>
            </Form.Row>
            <Form.Label>הגדרה דתית</Form.Label>
            <Form.Control
              as="select"
              className="mb-2"
              dir="rtl"
              onChange={this.handleReligiousStatusChanged}
              name="religiousStatus"
              value={this.state.religiousStatus}
            >
              <option value="חילוני">חילוני</option>
              <option value="מסורתי">מסורתי</option>
              <option value="דתי">דתי</option>
              <option value="חרדי">חרדי</option>
              <option value="דתי לשעבר">דתי לשעבר</option>
              <option value="חרדי לשעבר">חרדי לשעבר</option>
              <option value="אחר">אחר/לא מגדיר</option>
            </Form.Control>
            {this.state.religiousStatus === "אחר" ? (
              <React.Fragment>
                <Form.Label>פרט</Form.Label>
                <Form.Control
                  as="textarea"
                  className="mb-2"
                  dir="rtl"
                  onChange={this.handleReligiousTextChanged}
                  name="religiousText"
                  value={this.state.religiousText}
                />
              </React.Fragment>
            ) : null}
            {/* until here is the common part */}
            <Button
              className="btn btn-success my-2"
              onClick={this.addUnavailableTime}
            >
              הוסף זמן בלתי אפשרי לפעילות
            </Button>
            <br />
            {this.unavailableTimesForm()}
            <Form.Label dir="rtl">הערות/בקשות נוספות</Form.Label>
            <Form.Control
              type="text"
              dir="rtl"
              as="textarea"
              className="mb-2"
              onChange={this.handleNotesChanged}
              name="notes"
              value={this.state.notes}
            />
            {/* until here is the common part */}
            <Form.Label dir="rtl">צריך עזרה ב:</Form.Label>
            <Form.Control
              type="text"
              dir="rtl"
              as="textarea"
              className="mb-2"
              onChange={this.handleNeedsHelpInChanged}
              name="needsHelpIn"
              value={this.state.needsHelpIn}
            />
            <Form.Row dir="rtl">
              <Form.Group as={Col}>
                <Form.Label>הגדרה דתית</Form.Label>
                <Form.Control
                  as="select"
                  className="mb-2"
                  dir="rtl"
                  onChange={this.handleWorkStatusChanged}
                  name="workStatus"
                  value={this.state.workStatus}
                >
                  <option value="לא עובד ולא מחפש עבודה">
                    לא עובד ולא מחפש עבודה
                  </option>
                  <option value="לא עובד ומחפש עבודה">
                    לא עובד ומחפש עבודה
                  </option>
                  <option value="עובד במקצוע הלימודים">
                    עובד במקצוע הלימודים
                  </option>
                  <option value="עובד במקצוע אחר">עובד במקצוע אחר</option>
                </Form.Control>
              </Form.Group>
              {this.state.workStatus === "עובד במקצוע הלימודים" ||
              this.state.workStatus === "עובד במקצוע אחר" ? (
                <Form.Group as={Col}>
                  <Form.Label>פרט</Form.Label>
                  <Form.Control
                    as={TextValidator}
                    className="mb-2"
                    dir="rtl"
                    onChange={this.handleWorkTitleChanged}
                    name="workTitle"
                    value={this.state.workTitle}
                    validators={["required"]}
                    errorMessages={["שדה זה הינו חובה"]}
                  />
                </Form.Group>
              ) : (
                <Form.Group as={Col} />
              )}
            </Form.Row>
            <Form.Row dir="rtl">
              <Form.Group
                as={Col}
                sm={3}
                className="align-content-center"
                dir="ltr"
              >
                <Form.Check
                  label="?האם למדת בישיבה/סמינר"
                  onChange={this.handleIsLearnedInYeshivaChanged}
                  value={this.state.isLearnedInYeshiva}
                  className="custom-checkbox"
                />
              </Form.Group>
              {this.state.isLearnedInYeshiva ? (
                <Form.Group as={Col} sm={7}>
                  <Form.Group as={Row}>
                    <Form.Label dir="rtl">כמה שנים?</Form.Label>
                    <Col>
                      <Form.Control
                        as={TextValidator}
                        className="mb-2"
                        dir="rtl"
                        onChange={this.handleYeshivaTimesChanged}
                        name="yeshivaTimes"
                        value={this.state.yeshivaTimes}
                        validators={["required", "isNumber"]}
                        errorMessages={[
                          "שדה זה הינו חובה",
                          "אנא הכנס מספרים בלבד"
                        ]}
                      />
                    </Col>
                  </Form.Group>
                </Form.Group>
              ) : (
                <Form.Group as={Col} />
              )}
            </Form.Row>
            <Form.Group className="align-content-center" dir="ltr">
              <Form.Check
                label="?האם עברת מסלול של הכשרה מקצועית"
                onChange={this.handleIsHaveAnotherProfessionalTrainingChanged}
                value={this.state.isHaveAnotherProfessionalTraining}
              />
            </Form.Group>
            {this.state.isHaveAnotherProfessionalTraining ? (
              <Form.Group dir="rtl" as={Row}>
                <Form.Label>פרט</Form.Label>
                <Col>
                  <Form.Control
                    as={TextValidator}
                    className="mb-2"
                    dir="rtl"
                    onChange={this.handlePreviousProfessionChanged}
                    name="previousProfession"
                    value={this.state.previousProfession}
                    validators={["required"]}
                    errorMessages={["שדה זה הינו חובה"]}
                  />
                </Col>
              </Form.Group>
            ) : null}
            <Form.Group className="align-content-center" dir="ltr">
              <Form.Check
                label="?האם אתה בעל תואר אקדמאי קודם"
                onChange={this.handleIsHaveAnotherDegreeChanged}
                value={this.state.isHaveAnotherDegree}
              />
            </Form.Group>
            {this.state.isHaveAnotherDegree ? (
              <Form.Group dir="rtl" as={Row}>
                <Form.Label>פרט</Form.Label>
                <Col>
                  <Form.Control
                    as={TextValidator}
                    className="mb-2"
                    dir="rtl"
                    onChange={this.handlePreviousDegreeChanged}
                    name="previousDegree"
                    value={this.state.previousDegree}
                    validators={["required"]}
                    errorMessages={["שדה זה הינו חובה"]}
                  />
                </Col>
              </Form.Group>
            ) : null}
            <Jumbotron>
              <Form.Group>
                <Form.Label dir="rtl">
                  <b>
                    מרכז כיוון בירושלים הוא גוף שעוסק בהכשרות מקצועיות ובהשמת
                    מקצועות לחברי העיר.
                    <br /> האם הייתי רוצה שיצרו איתי קשר עבור אחד או יותר
                    מהתחומים הבאים?
                  </b>
                </Form.Label>
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="אימון אישי"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("personalTraining");
                  }}
                  value={this.state.WantDetailsAbout.personalTraining}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="חיפוש עבודה"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("jobSeeking");
                  }}
                  value={this.state.WantDetailsAbout.jobSeeking}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="הכשרות מקצועיות"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("professionalTraining");
                  }}
                  value={this.state.WantDetailsAbout.professionalTraining}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="קורס אנגלית"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("englishCourse");
                  }}
                  value={this.state.WantDetailsAbout.englishCourse}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="קורס מחשבים"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("computerCourse");
                  }}
                  value={this.state.WantDetailsAbout.computerCourse}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="אבחון לימודים"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("studyDiagnostics");
                  }}
                  value={this.state.WantDetailsAbout.studyDiagnostics}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="תוכניות קידום"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("selfAdvanceProgram");
                  }}
                  value={this.state.WantDetailsAbout.selfAdvanceProgram}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="יזמות"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("entrepreneurship");
                  }}
                  value={this.state.WantDetailsAbout.entrepreneurship}
                />
              </Form.Group>
              <Form.Group className="align-content-center" dir="ltr">
                <Form.Check
                  label="מכינה קצרת טווח"
                  onChange={() => {
                    this.handleWantDetailsAboutChanged("shortTermPreparatory");
                  }}
                  value={this.state.WantDetailsAbout.shortTermPreparatory}
                />
              </Form.Group>
            </Jumbotron>
            {this.state.academicPlan === "מכינה/בגרויות" ? (
              <React.Fragment>
                <Form.Row dir="rtl">
                  <Form.Group as={Col}>
                    <Form.Label>מתמטיקה</Form.Label>
                    <Form.Control
                      as="select"
                      className="mb-2"
                      dir="rtl"
                      onChange={this.handleMathLevelChanged}
                      name="mathLevel"
                      value={this.state.mathLevel}
                    >
                      <option value="0">לא רלוונטי</option>
                      <option value="3">3 יחידות</option>
                      <option value="4">4 יחידות</option>
                      <option value="5">5 יחידות</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>אנגלית</Form.Label>
                    <Form.Control
                      as="select"
                      className="mb-2"
                      dir="rtl"
                      onChange={this.handleEnglishLevelChanged}
                      name="englishLevel"
                      value={this.state.englishLevel}
                    >
                      <option value="0">לא רלוונטי</option>
                      <option value="3">3 יחידות</option>
                      <option value="4">4 יחידות</option>
                      <option value="5">5 יחידות</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>פיזיקה</Form.Label>
                    <Form.Control
                      as="select"
                      className="mb-2"
                      dir="rtl"
                      onChange={this.handlePhysicsLevelChanged}
                      name="physicsLevel"
                      value={this.state.physicsLevel}
                    >
                      <option value="0">לא רלוונטי</option>
                      <option value="3">3 יחידות</option>
                      <option value="4">4 יחידות</option>
                      <option value="5">5 יחידות</option>
                    </Form.Control>
                  </Form.Group>
                </Form.Row>
              </React.Fragment>
            ) : null}
            <Form.Group className="align-content-center" dir="ltr">
              <Form.Check
                label="?בוגר צבא/שירות לאומי"
                onChange={this.handleIsServedChanged}
                value={this.state.isServed}
              />
            </Form.Group>
            <Button className="m-2 btn btn-danger" type="button">
              ביטול
            </Button>
            <Button className="m-2 " type="submit">
              הרשם
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}
