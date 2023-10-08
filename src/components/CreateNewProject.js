import styles from "./CreateNewProject.module.css";

const CreateNewProject = () => {
  return (
    <div className={styles.createNewProject1}>
      <div className={styles.labelParent}>
        <div className={styles.label}>Tạo dự án mới</div>
        <img className={styles.closeIcon1} alt="" src="/close.svg" />
      </div>
      <div className={styles.inputParent}>
        <div className={styles.input}>
          <img
            className={styles.outlineSearch6}
            alt=""
            src="/oval-copy-3.svg"
          />
          <div className={styles.labelPointer3}>
            <div className={styles.label1}>Nhập tên dự án</div>
            <div className={styles.pointer3} />
          </div>
          <img
            className={styles.outlineSearch6}
            alt=""
            src="/oval-copy-3.svg"
          />
          <img className={styles.outlineClose1} alt="" src="/oval-copy-3.svg" />
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label2}>Quản lý dự án</div>
          <div className={styles.input2}>
            <img
              className={styles.outlineSearch6}
              alt=""
              src="/oval-copy-3.svg"
            />
            <div className={styles.labelPointer3}>
              <div className={styles.label3}>Chọn người quản lý</div>
              <div className={styles.pointer3} />
            </div>
            <img
              className={styles.uangleDownIcon6}
              alt=""
              src="/uangledown.svg"
            />
            <img
              className={styles.uangleDownIcon7}
              alt=""
              src="/oval-copy-3.svg"
            />
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label4}>Thành viên</div>
          <div className={styles.selects}>
            <div className={styles.selectsWrapper}>
              <div className={styles.selects1}>
                <div className={styles.inputGroup}>
                  <div className={styles.input3}>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label5}>Nguyễn Hoàng Hà</div>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.ucloseIcon3}
                      alt=""
                      src="/uclose.svg"
                    />
                  </div>
                  <div className={styles.input4}>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label5}>Cao Minh Đạt</div>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.ucloseIcon3}
                      alt=""
                      src="/uclose.svg"
                    />
                  </div>
                  <div className={styles.input5}>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <div className={styles.label5}>Nguyễn Minh Châu</div>
                    <img
                      className={styles.outlineSearch8}
                      alt=""
                      src="/oval-copy-3.svg"
                    />
                    <img
                      className={styles.ucloseIcon3}
                      alt=""
                      src="/uclose1.svg"
                    />
                  </div>
                  <div className={styles.frameChild} />
                </div>
                <img
                  className={styles.uangleDownIcon8}
                  alt=""
                  src="/oval-copy-3.svg"
                />
              </div>
            </div>
            <div className={styles.multiselect}>
              <div className={styles.listElementParent}>
                <div className={styles.listElement}>
                  <div className={styles.label3}>Cao Minh Đạt</div>
                  <img
                    className={styles.fillCheckmark6}
                    alt=""
                    src="/-fill--checkmark.svg"
                  />
                </div>
                <div className={styles.listElement1}>
                  <img
                    className={styles.outlineFile3}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.label9}>Hoàng Minh Đức</div>
                  <img
                    className={styles.fillCheckmark7}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.listElement1}>
                  <img
                    className={styles.outlineFile3}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.label9}>Nguyễn Mạnh Cường</div>
                  <img
                    className={styles.fillCheckmark7}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.listElement}>
                  <div className={styles.label3}>Nguyễn Minh Châu</div>
                  <img
                    className={styles.fillCheckmark6}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.listElement1}>
                  <img
                    className={styles.outlineFile3}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.label9}>Nguyễn Hữu Dũng</div>
                  <img
                    className={styles.fillCheckmark7}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.listElement}>
                  <div className={styles.label3}>Nguyễn Hoàng Hà</div>
                  <img
                    className={styles.fillCheckmark6}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
              </div>
              <div className={styles.scrollbar}>
                <div className={styles.scrollbarThumb1} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.labelGroup}>
          <div className={styles.label2}>Đơn vị quản lý</div>
          <div className={styles.input2}>
            <img
              className={styles.outlineSearch6}
              alt=""
              src="/oval-copy-3.svg"
            />
            <div className={styles.labelPointer3}>
              <div className={styles.label3}>Chọn đơn vị quản lý</div>
              <div className={styles.pointer3} />
            </div>
            <img
              className={styles.uangleDownIcon6}
              alt=""
              src="/oval-copy-3.svg"
            />
            <img
              className={styles.uangleDownIcon7}
              alt=""
              src="/oval-copy-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.modalfooterWrapper}>
        <div className={styles.modalfooter}>
          <div className={styles.buttonParent}>
            <div className={styles.button}>
              <img
                className={styles.keyboardArrowRightIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
              <div className={styles.text1}>Hủy bỏ</div>
            </div>
            <div className={styles.filter}>
              <div className={styles.ucheckParent}>
                <img
                  className={styles.uangleDownIcon6}
                  alt=""
                  src="/ucheck.svg"
                />
                <div className={styles.spXpTheoParent}>
                  <div className={styles.spXpTheo1}>Sắp xếp theo</div>
                  <div className={styles.mcU1}>Cập nhật</div>
                </div>
              </div>
              <img
                className={styles.keyboardArrowRightIcon1}
                alt=""
                src="/oval-copy-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewProject;
