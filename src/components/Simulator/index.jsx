import { useState, useEffect } from 'react';
import SimulationSetup from '../SimulationSetup';
import Title from '../Title';
import Modal from '../Modal';
import Text from '../Text';
import Button from '../Button';
import Panel from '../Panel';
import PropTypes from 'prop-types';

import './simulator.scss';

export default function Simulator({ maxCredit, minCredit, maxInstallments, minInstallments, interest }) {
  const [currentCredit, setCurrentCredit] = useState(minCredit);
  const [currentInstallments, setCurrentInstallments] = useState(minInstallments);
  const [totalPay, setTotalPay] = useState(0);
  const [confirmModal, setConfirmModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  useEffect(() => {
    setTotalPay(calculateFixedFee());
  }, [currentInstallments, currentCredit]);

  const calculateFixedFee = () => {
    if (currentInstallments <= 0 || currentInstallments > maxInstallments) return '----';
    let FixedFee;
    // ejm: interest = 0.4 ⚠︎
    if (interest) {
      FixedFee = Math.round(
        currentCredit *
          ((Math.pow(1 + interest, currentInstallments) * interest) / (Math.pow(1 + interest, currentInstallments) - 1))
      );
    } else {
      FixedFee = Math.round(currentCredit / currentInstallments);
    }
    return FixedFee.toLocaleString('de-DE');
  };

  const handleCloseConfirm = () => {
    setConfirmModal(false);
  };
  const handleOpenConfirm = () => {
    setConfirmModal(true);
  };
  const handleCloseDetail = () => {
    setDetailModal(false);
  };
  const handleOpenDetail = () => {
    setDetailModal(true);
  };

  const verifyLimitCredit = value => {
    if (value < minCredit) return minCredit;
    if (value > maxCredit) return maxCredit;
    return value;
  };

  const verifyLimitInstallments = value => {
    if (value < minInstallments) return minInstallments;
    if (value > maxInstallments) return maxInstallments;
    return value;
  };

  const toInt = value => {
    const onlyNumber = value.replace(/\D/g, '');
    return parseInt(onlyNumber, 10);
  };

  //simulator control slide

  const slideControlInst = sliderValue => {
    setCurrentInstallments(sliderValue);
  };

  const slideControlCredit = sliderValue => {
    setCurrentCredit(sliderValue);
  };

  //simulator control metric

  const MetricControlInstallments = value => {
    const valueInt = parseInt(value, 10);
    value ? setCurrentInstallments(valueInt) : setCurrentInstallments(0);
  };

  const blurControlInstallments = ev => {
    const valueInt = toInt(ev.target.value);
    const currentvalue = verifyLimitInstallments(valueInt);
    setCurrentInstallments(currentvalue);
  };

  const MetricControlCredit = value => {
    const valueInt = parseInt(value, 10);
    if (value) setCurrentCredit(valueInt);
  };

  const onBlurControlCredit = ev => {
    const valueInt = toInt(ev.target.value);
    const currentvalue = verifyLimitCredit(valueInt);
    setCurrentCredit(currentvalue);
  };

  return (
    <div className="simulator">
      <Title>Simulá tu crédito</Title>
      <SimulationSetup
        InfoValue={'Monto total'}
        maxValue={maxCredit}
        minValue={minCredit}
        sliderChange={slideControlCredit}
        isCurrecy
        MetricChange={MetricControlCredit}
        MetricBlur={onBlurControlCredit}
        currentValue={currentCredit}
      />
      <SimulationSetup
        InfoValue={'Plazo'}
        maxValue={maxInstallments}
        minValue={minInstallments}
        sliderChange={slideControlInst}
        MetricChange={MetricControlInstallments}
        MetricBlur={blurControlInstallments}
        currentValue={currentInstallments}
      />
      <Panel panelText="CUOTA FIJA POR MES" monthlyFee={totalPay} />
      <div className="grid-buttons">
        <Button bgColor="green" handleClick={handleOpenConfirm}>
          <Text linear size="lg">
            OBTENÉ CRÉDITO
          </Text>
        </Button>
        <Button bgColor="blue" handleClick={handleOpenDetail}>
          <Text linear size="sm">
            VER DETALLE DE <br /> CUOTAS
          </Text>
        </Button>
      </div>
      {confirmModal && (
        <Modal onClose={handleCloseConfirm} setConfirmModalsize="sm">
          <p>
            Se genero un credito por $ {currentCredit.toLocaleString('de-DE')} en {currentInstallments} cuotas
          </p>
        </Modal>
      )}
      {detailModal && (
        <Modal onClose={handleCloseDetail} size="sm">
          <p>cantidad de cuotas: {currentInstallments}</p>
          <p>cuotas de: $ {currentCredit.toLocaleString('de-DE')}</p>
          <p>Total a pagar: $ {totalPay.toLocaleString('de-DE')}</p>
        </Modal>
      )}
    </div>
  );
}

Title.propTypes = {
  maxCredit: PropTypes.number,
  minCredit: PropTypes.number,
  maxInstallments: PropTypes.number,
  minInstallments: PropTypes.number,
};
