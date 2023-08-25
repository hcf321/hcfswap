import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    
	<svg viewBox="0 0 198 198" width="198" height="198" {...props}> <image id="image0" width="198" height="198" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC+lBMVEUAAAD689LfvoPXrWTX rWTXrmDctmvcunDgwHjiyIXt1ZPy4Kj99+PRpFXNoFPNsnPbvnn58cP2567467Lr1ZHq2Zbw25bz 4KXz5LXXuXnZtWv67azw2pr77sXUvH357azr1KPnyYTgxHz887j88a/+9Lz98rWynGnf0K7m0Jfl y4XHs4nEq3DOwa6wl2nCpGS0oIifgFOEYj2Rd2KhiXHy5KLDs556WjuWeVaffUirjVrBqnvVsmXg xJG+kUayhUDfvXzGq3WaeEh4VC5oQyOFaFJeOBtoRCl6WkNsSS9hPCBwTzZaMhXhyIHk05Hv3qP0 5Kf36rfx58Ldyovr4Lv58878+NjXxpnt2ZOvhEHEpmmSWRGpfDfQv4/IsXqyjVbu1Yfv3ZvPtHKJ SwHv14rGrHDZxITWvX3FpGK6mFeWZiPOu4Tk17Hezabx2YzTuXfdw3yifEixkVmngUzDoF28llDp zH6th1LKrWq3ll25pXyunHSulGLjwnPmx3i+nF+WbTzmz4ecdEK8pG/Wtmvhv2/ZvnaceEXWrVzL mES/jDnClkfDm1HKo1fMqWDRsGbeu2ufgU+li1vZsWCui1Srik3s0YO6j0SgkHGzq5XAuaWqn4iu pZC5sZu7tKLPy7vCtYn04ZWwiUmhlXvJxK52ZEzJxLbV0cSLdlWZiWuCbEvd29GAclvk49zDvavJ wJ787qOnhlG2j0zVqVeRfV6imoZ5a1aVg2WIfml/Z0TQoU2YczifeD2mhEaomn/Bt5m3hzvSpFK5 rIa6nGHs7OijfkByXUL46J10UStwSyV3TiZ+VStkQSGOaz2hcy6ldzOxgDZdNBSEXjNqQR1jOxnN nUrHkT2+omZ7WDBuRiGMYSKEWx9+XzeHZDjctmV+WSFqRBCZbC16URdwSROUckNqRySGYiqNZy2S bDKNZDZsVDV1URtfSjVjPAqPhG+DWi50WjiWjXfry22afEpULhHnw2Dbsk3lvVRbNAOZkn+EeGJR NB1WPSj///9Ghbh9AAAATXRSTlMAAxMxSW54iXVQNxYCY5bO7f7+6NCUbi0IXKWhUwWrNgtq1dBb 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 RU5ErkJggg=="/>
</svg>
  );
};

export default Icon;
