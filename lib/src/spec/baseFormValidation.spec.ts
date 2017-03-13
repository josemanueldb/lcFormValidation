import { createFormValidation, BaseFormValidation } from '../baseFormValidation';
import { ValidationConstraints, FieldValidationResult } from '../entities';
import { ValidationEngine } from '../validationEngine';

describe('formValidation tests', () => {
  describe('Group#1 => BaseFormValidation tests', () => {
    it('Spec#1 => should return an instance of Formvalidation', () => {
      // Arrange
      const validationConstraints = {};

      // Act
      const formValidation = new BaseFormValidation(validationConstraints);

      // Assert
      expect(formValidation).to.be.an('object').that.is.not.null;
      expect(formValidation).to.be.an.instanceOf(BaseFormValidation);
    });

    it('Spec#2 => should have an exposed method "isFormDirty" that calls ValidationEngine.isFormDirty', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const isFormDirty = sinon.stub(ValidationEngine.prototype, 'isFormDirty', () => { });
      const validationConstraints = {};

      // Act
      const formValidation = new BaseFormValidation(validationConstraints);
      formValidation.isFormDirty();

      // Assert
      expect(isFormDirty.calledOnce).to.be.true;
    }));

    it('Spec#3 => should have an exposed method "validateField" that calls ValidationEngine.validateSingleField', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validateSingleField = sinon.stub(ValidationEngine.prototype, 'validateSingleField', () => { });
      const validationConstraints = {};
      const viewModel = {};
      const key = 'fullname';
      const value = '';
      const filter = undefined;

      // Act
      const formValidation = new BaseFormValidation(validationConstraints);
      formValidation.validateField(viewModel, key, value, filter);

      // Assert
      expect(validateSingleField.calledOnce).to.be.true;
    }));

    it('Spec#4 => should have an exposed method "validateForm" that calls ValidationEngine.validateForm', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validateForm = sinon.stub(ValidationEngine.prototype, 'validateForm', () => { });
      const validationConstraints = {};
      const viewModel = {};

      // Act
      const formValidation = new BaseFormValidation(validationConstraints);
      formValidation.validateForm(viewModel);

      // Assert
      expect(validateForm.calledOnce).to.be.true;
    }));

    it('Spec#5 => should have an exposed method "isValidationInProgress" that calls ValidationEngine.isValidationInProgress', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const isValidationInProgress = sinon.stub(ValidationEngine.prototype, 'isValidationInProgress', () => { });
      const validationConstraints = {};

      // Act
      const formValidation = new BaseFormValidation(validationConstraints);
      formValidation.isValidationInProgress();

      // Assert
      expect(isValidationInProgress.calledOnce).to.be.true;
    }));
  });

  describe('Group#2 => createFormValidation tests', () => {
    it('Spec#1 => should return an instance of BaseFormValidation', () => {
      // Arrange
      const validationConstraints = {};

      // Act
      const formValidation = createFormValidation(validationConstraints);

      // Assert
      expect(formValidation).to.be.an('object').that.is.an.instanceOf(BaseFormValidation);
    });
  });

  describe('Group#3 => createFormValidation ValidationConstraints.global object boundaries', () => {
    it('Spec #1 => should not add global validations with null value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;

    }));

    it('Spec #2 => should not add global validations with undefined value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      const formValidation = createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #3 => should not add global validations with number value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #4 => should not add global validations with string value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #5 => should not add global validations with function value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #6 => should not add global validations with boolean value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #7 => should not add global validations with symbol value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const validationConstraints = null;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #8 => should not add global validations if global object is not an array of functions', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });
      const validationConstraints1 = {
        global: null
      };
      const validationConstraints2 = {
        global: [null]
      };

      // Act
      createFormValidation(validationConstraints1);
      createFormValidation(validationConstraints2);

      // Assert
      expect(addFormValidation.called).to.be.false;
    }));

    it('Spec #9 => should not add global validations if global object is an array of functions', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const addFormValidation = sinon.stub(ValidationEngine.prototype, 'addFormValidation', () => { });
      const validationConstraints = {
        global: [
          (vm: any) => new FieldValidationResult(),
          (vm: any) => new FieldValidationResult(),
          (vm: any) => new FieldValidationResult(),
        ]
      };

      // Act
      createFormValidation(validationConstraints);

      // Assert
      expect(addFormValidation.calledThrice).to.be.true;
    }));
  });

  describe('Group #4 => createFormValidation ValidationConstraints.fields object boundaries', () => {
    it('shoul add field validations with a field with {validator: <function>} value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const addFieldValidation = sinon.stub(ValidationEngine.prototype, 'addFieldValidation', () => { });
      const validationFunction = () => new FieldValidationResult()
      const validationConstraints: ValidationConstraints = {
        fields: {
          fullname: {
            validator: validationFunction,
          }
        }
      };

      // Act
      const formValidation = createFormValidation(validationConstraints);

      // Assert
      expect(addFieldValidation.calledOnce).to.be.true;
      expect(addFieldValidation.calledWithExactly('fullname', validationFunction, undefined)).to.be.true;

    }));

    it('should not add field validations with a field with null value', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const addFieldValidation = sinon.stub(ValidationEngine.prototype, 'addFieldValidation', () => { });
      const validationConstraints: ValidationConstraints = {
        fields: null
      };

      // Act
      const formValidation = createFormValidation(validationConstraints);

      // Assert
      expect(addFieldValidation.called).to.be.false;
    }));

    it('should not add a field validations for a non object field in ValidationConstraints.field', sinon.test(function () {
      // Arrange
      const sinon: sinon.SinonStatic = this;
      const addFieldValidation = sinon.stub(ValidationEngine.prototype, 'addFieldValidation', () => { });
      const validationConstraints: ValidationConstraints = {
        fields: ('test' as any)
      };

      // Act
      const formValidation = createFormValidation(validationConstraints);

      // Assert
      expect(addFieldValidation.called).to.be.false;
    }));
  });
});
