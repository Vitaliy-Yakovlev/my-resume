import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  // ... existing code ...

  ${props =>
    props.variant === 'github' &&
    css`
      background-color: #1f883d;
      border: 1px solid #1f883d;
      color: #ffffff;
      font-weight: 500;
      padding: 8px 20px;
      border-radius: 5px;
      font-size: 14px;
      font-family:
        -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif;
      line-height: 20px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      appearance: none;
      text-decoration: none;
      text-align: center;
      transition: all 0.3s ease;

      &:hover {
        background-color: white;
        color: #1f883d;
        border-color: #1f883d;
        transform: translateY(-2px);
      }

      &:active {
        transform: translateY(0);
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(31, 136, 61, 0.2);
      }

      &:disabled {
        background-color: #94d3a2;
        border-color: rgba(27, 31, 36, 0.15);
        color: rgba(255, 255, 255, 0.8);
        cursor: default;
        transform: none;
      }

      svg {
        margin-right: 8px;
        vertical-align: text-bottom;
      }
    `}// ... existing code ...
`;
