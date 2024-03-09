<template>
  <div>
    <div><h2 style="text-align: center">THÔNG TIN CÁ NHÂN</h2></div>
    <div class="account-info">
      <fieldset class="fieldset create info hide">
        <input type="hidden" name="success_url" value="">
        <input type="hidden" name="error_url" value="">
        <input type="hidden" name="skip_email" id="skip_email" value="0">
        <input type="hidden" name="magenest_sociallogin_type" value="">
        <input type="hidden" name="magenest_sociallogin_id" value="">
        <div class="row customer-name-fields">
          <div class="field field-name-firstname required col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <label for="firtname" class="label"><span>Tên</span></label>
            <div>
              <input type="text" name="firstname" placeholder="Tên" title="Tên" class="input-text required-entry">
            </div>
          </div>
          <div class="field field-name-lastname required col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.account-info{
  display: block;
}
i
.form-create-account .account-content-wrapper .fieldset {
    font-size: 0;
}
input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}
input[type="hidden" i] {
    appearance: none;
    background-color: initial;
    cursor: default;
    display: none !important;
    border: initial;
    border-color: initial;
    border-radius: initial;
}
input {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  -webkit-rtl-ordering: logical;
  padding-block: 1px;
  padding-inline: 2px;
}
.hide {
    display: none!important;
}
fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}
fieldset {
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
}
body {
  color: #666;
  background-color: #fff;
  font-style: normal;
  font-family: 'Helvetica Neue' !important;
  font-weight: 400 !important;
  line-height: 1.75;
  font-size: 16px;
  overflow-x: hidden !important;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}
.form-create-account .account-content-wrapper .fieldset {
  font-size: 0;
}
.form-create-account .account-content-wrapper .fieldset .field:nth-child(odd) {
  margin-right: 35px;
}
.form-create-account .account-content-wrapper .fieldset .field {
  margin: 30px 0;
  display: inline-block;
  width: calc(50% - 35px);
}
.customer-name-fields .field {
  margin-bottom: 15px;
}
.col-lg-6 {
  width: 50%;
  float: left;
}
.col-md-6 {
  width: 50%;
  float: left;
}
.col-sm-6 {
  width: 50%;
  float: left;
}
.col-xs-12 {
  width: 100%;
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.form-create-account .account-content-wrapper .fieldset .field .label {
    display: none;
    margin-bottom: 3px;
    font-size: 12px;
    color: #959595;
}
.field>.label, .form-group>.label, .field>label, .form-group>label {
    display: inline-block;
    font-weight: 500;
}
.label, label {
    font-size: 13px;
    color: #5f5f5f;
    padding: 0;
    margin: 0 0 9px;
    font-weight: 400;
    text-align: left;
    line-height: inherit;
}
.label{
  white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
label{
  max-width: 100%;
  cursor: default;
}
</style>
