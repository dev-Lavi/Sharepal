import React, { useState, useCallback, useMemo } from 'react';
import { X, Calendar, ChevronLeft, ChevronRight, Info, Percent } from 'lucide-react';

/* ── Date Helpers ── */
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, 1);
const dayDiff = (a, b) => Math.round((startOfDay(a) - startOfDay(b)) / 864e5);
const sameDay = (a, b) => Boolean(a && b && dayDiff(a, b) === 0);

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

function formatDisplay(d) {
  if (!d) return '';
  return `${SHORT_MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

function formatDayWithSuffix(d) {
  if (!d) return '';
  const day = d.getDate();
  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) suffix = 'st';
  else if (day === 2 || day === 22) suffix = 'nd';
  else if (day === 3 || day === 23) suffix = 'rd';
  return `${day}${suffix} ${SHORT_MONTHS[d.getMonth()]}`;
}

/** Build a 6-week matrix for any month */
function buildGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const startCol = firstDay.getDay(); // 0=Sunday
  const rows = [];
  let current = new Date(year, month, 1 - startCol);
  for (let r = 0; r < 6; r++) {
    const week = [];
    for (let c = 0; c < 7; c++) {
      week.push(new Date(current));
      current = addDays(current, 1);
    }
    rows.push(week);
  }
  return rows;
}

/** Single Month Grid Component */
function MonthView({
  year,
  month,
  startDate,
  endDate,
  hoverDate,
  anchorDate,
  onPick,
  onHover,
  minDate
}) {
  const grid = useMemo(() => buildGrid(year, month), [year, month]);

  // Compute active range
  const lo = anchorDate
    ? (hoverDate && dayDiff(hoverDate, anchorDate) < 0 ? hoverDate : anchorDate)
    : startDate;
  const hi = anchorDate
    ? (hoverDate && dayDiff(hoverDate, anchorDate) < 0 ? anchorDate : (hoverDate || anchorDate))
    : endDate;

  return (
    <div className="sp-dp-month">
      <div className="sp-dp-month-header">
        <span className="sp-dp-month-title">{MONTHS[month]} {year}</span>
      </div>

      <div className="sp-dp-weekdays">
        {WEEKDAYS.map(w => (
          <span key={w} className="sp-dp-weekday">{w}</span>
        ))}
      </div>

      <div className="sp-dp-weeks-container">
        {grid.map((week, rowIndex) => (
          <div key={rowIndex} className="sp-dp-week-row">
            {week.map((date, colIndex) => {
              const inCurrentMonth = date.getMonth() === month;
              const isPast = minDate && dayDiff(date, minDate) < 0;
              const isDisabled = isPast;

              const isStart = lo && sameDay(date, lo);
              const isEnd = hi && sameDay(date, hi);
              const inRange = lo && hi && dayDiff(date, lo) >= 0 && dayDiff(date, hi) <= 0;
              const isSingleDay = lo && hi && sameDay(lo, hi) && (isStart || isEnd);

              return (
                <div
                  key={colIndex}
                  className={[
                    'sp-dp-day-cell',
                    !inCurrentMonth ? 'sp-dp-other-month' : '',
                    isDisabled ? 'sp-dp-disabled' : '',
                    inRange ? 'sp-dp-in-range' : '',
                    isStart ? 'sp-dp-range-start' : '',
                    isEnd ? 'sp-dp-range-end' : '',
                    isSingleDay ? 'sp-dp-single-day' : ''
                  ].filter(Boolean).join(' ')}
                  onClick={() => !isDisabled && onPick(date)}
                  onMouseEnter={() => !isDisabled && onHover(date)}
                >
                  <span className="sp-dp-day-text">
                    {date.getDate()}
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DatePickerModal({ isOpen, onClose, onApplyDates, currentDates }) {
  const today = useMemo(() => startOfDay(new Date()), []);

  // Default range: either existing or 2026 / current date
  const initialStart = useMemo(() => {
    if (currentDates?.startDate) return startOfDay(new Date(currentDates.startDate));
    return addDays(today, 1);
  }, [currentDates, today]);

  const initialEnd = useMemo(() => {
    if (currentDates?.endDate) return startOfDay(new Date(currentDates.endDate));
    return addDays(initialStart, 34); // ~34 days default tenure
  }, [currentDates, initialStart]);

  const [start, setStart] = useState(initialStart);
  const [end, setEnd] = useState(initialEnd);
  const [anchor, setAnchor] = useState(null);
  const [hover, setHover] = useState(null);

  const [viewDate, setViewDate] = useState(() => startOfDay(initialStart));

  const viewYear1 = viewDate.getFullYear();
  const viewMonth1 = viewDate.getMonth();

  const nextMonthDate = addMonths(viewDate, 1);
  const viewYear2 = nextMonthDate.getFullYear();
  const viewMonth2 = nextMonthDate.getMonth();

  const prevMonth = () => {
    setViewDate(prev => addMonths(prev, -1));
  };

  const nextMonth = () => {
    setViewDate(prev => addMonths(prev, 1));
  };

  const handlePick = useCallback((date) => {
    if (!anchor) {
      setAnchor(date);
      setStart(date);
      setEnd(null);
      setHover(date);
    } else {
      const isBefore = dayDiff(date, anchor) < 0;
      const s = isBefore ? date : anchor;
      const e = isBefore ? anchor : date;
      setStart(s);
      setEnd(e);
      setAnchor(null);
      setHover(null);
    }
  }, [anchor]);

  const handleHover = useCallback((date) => {
    if (anchor) {
      setHover(date);
    }
  }, [anchor]);

  // Display range
  const lo = anchor ? (hover && dayDiff(hover, anchor) < 0 ? hover : anchor) : start;
  const hi = anchor ? (hover && dayDiff(hover, anchor) < 0 ? anchor : (hover || anchor)) : end;

  const totalDays = lo && hi ? Math.max(1, dayDiff(hi, lo)) : 0;
  // Chargeable period is between start+1 and end-1 (excluding delivery & pickup days)
  const chargeableStart = lo ? addDays(lo, 1) : null;
  const chargeableEnd = hi ? addDays(hi, -1) : null;
  const hasChargeable = chargeableStart && chargeableEnd && dayDiff(chargeableEnd, chargeableStart) >= 0;

  const handleContinue = () => {
    if (!start || !end) return;
    const fmt = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    onApplyDates({
      startDate: fmt(start),
      endDate: fmt(end),
      days: totalDays,
      startDateFormatted: formatDisplay(start),
      endDateFormatted: formatDisplay(end)
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="sp-dp-overlay fixed inset-0 z-[250] bg-black/65 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose} role="dialog" aria-modal="true">
      <div className="sp-dp-container bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

        {/* Modal Header */}
        <div className="sp-dp-header">
          <h2 className="sp-dp-title">Select your Dates</h2>
          <button type="button" className="sp-dp-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Layout */}
        <div className="sp-dp-content">

          {/* Left Summary & Action Panel */}
          <div className="sp-dp-left-col">
            
            {/* Delivery & Pickup Date Inputs */}
            <div className="sp-dp-inputs-row">
              <div className="sp-dp-input-box">
                <span className="sp-dp-input-label">Delivery Date <span className="sp-dp-asterisk">*</span></span>
                <div className="sp-dp-input-val">
                  <Calendar size={16} color="#475569" />
                  <span>{lo ? formatDisplay(lo) : 'Select date'}</span>
                </div>
              </div>

              <div className="sp-dp-input-box">
                <span className="sp-dp-input-label">Pickup Date <span className="sp-dp-asterisk">*</span></span>
                <div className="sp-dp-input-val">
                  <Calendar size={16} color="#475569" />
                  <span>{hi ? formatDisplay(hi) : 'Select date'}</span>
                </div>
              </div>
            </div>

            {/* Same-day delivery notification box */}
            <div className="sp-dp-info-box">
              <Info size={18} className="sp-dp-info-icon" />
              <p className="sp-dp-info-text">
                <strong>Same-day delivery</strong> between 5PM and 11PM. For future dates, you can select a specific time slot available at checkout. We pickup between <strong>9AM to 1PM.</strong>
              </p>
            </div>

            {/* Rental Period Badge */}
            <div className="sp-dp-period-section">
              <span className="sp-dp-period-heading">Your Rental Period:</span>
              <div className="sp-dp-period-details">
                <div className="sp-dp-period-days">
                  <span className="sp-dp-days-count">{totalDays}</span>
                  <span className="sp-dp-days-unit">Days</span>
                </div>
                <div className="sp-dp-chargeable-box">
                  <span className="sp-dp-chargeable-title">Chargeable Period:</span>
                  <div className="sp-dp-chargeable-dates">
                    <Calendar size={14} color="#64748B" />
                    <span>
                      {hasChargeable 
                        ? `${formatDayWithSuffix(chargeableStart)} - ${formatDayWithSuffix(chargeableEnd)}`
                        : 'Same as rental period'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Save More Banner */}
            <div className="sp-dp-save-banner">
              <div className="sp-dp-save-header">
                <div className="sp-dp-percent-badge">
                  <Percent size={14} strokeWidth={3} />
                </div>
                <span className="sp-dp-save-title">Save more with us!</span>
              </div>
              <p className="sp-dp-save-desc">
                Longer rental periods mean bigger savings—enjoy discounts of up to 12%. We don't charge you for deliver and pickup days!
              </p>
            </div>

            {/* Blue Continue Button */}
            <button
              type="button"
              className="sp-dp-continue-btn"
              onClick={handleContinue}
              disabled={!start || !end}
            >
              Continue
            </button>

          </div>

          {/* Right Dual Calendar Panel */}
          <div className="sp-dp-right-col">
            
            {/* Navigation Arrows */}
            <div className="sp-dp-calendar-nav-bar">
              <button 
                type="button" 
                className="sp-dp-nav-arrow left" 
                onClick={prevMonth}
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>

              <button 
                type="button" 
                className="sp-dp-nav-arrow right" 
                onClick={nextMonth}
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="sp-dp-dual-calendars">
              {/* Calendar 1 */}
              <MonthView
                year={viewYear1}
                month={viewMonth1}
                startDate={start}
                endDate={end}
                hoverDate={hover}
                anchorDate={anchor}
                onPick={handlePick}
                onHover={handleHover}
                minDate={today}
              />

              {/* Calendar 2 */}
              <MonthView
                year={viewYear2}
                month={viewMonth2}
                startDate={start}
                endDate={end}
                hoverDate={hover}
                anchorDate={anchor}
                onPick={handlePick}
                onHover={handleHover}
                minDate={today}
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
