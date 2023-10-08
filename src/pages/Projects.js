import { useState, useCallback } from "react";
import CreateNewProject from "../components/CreateNewProject";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  const [isCreateNewProjectOpen, setCreateNewProjectOpen] = useState(false);
  const navigate = useNavigate();

  const openCreateNewProject = useCallback(() => {
    setCreateNewProjectOpen(true);
  }, []);

  const closeCreateNewProject = useCallback(() => {
    setCreateNewProjectOpen(false);
  }, []);

  const onCardContainerClick = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer1Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer2Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer3Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer4Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onCardContainer5Click = useCallback(() => {
    // Please sync "Projects / Detail / Group By Deadline" to the project
  }, []);

  const onIconButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.projects}>
        <div className={styles.projectsInner}>
          <div className={styles.frameParent}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon1} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic22} />
                    <div className={styles.state22} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Overview</div>
                    <div className={styles.employees}>Employees</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic23} />
                        <div className={styles.state23} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic24} />
                        <div className={styles.state23} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic25} />
                        <div className={styles.state23} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy37}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/usearch.svg"
                        />
                        <input
                             type="text"
                             placeholder="Search..."
                             value={searchQuery}
                            onChange={handleInputChange}
                        />
                      </div>
                      <img
                        className={styles.uangleDownIcon4}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon1}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.filterParent}>
                <div className={styles.filter} onClick={openCreateNewProject}>
                  <div className={styles.uplusParent}>
                    <img
                      className={styles.usearchIcon1}
                      alt=""
                      src="/uplus1.svg"
                    />
                    <div className={styles.headerParent}>
                      <div className={styles.spXpTheo3}>Sắp xếp theo</div>
                      <div className={styles.mcU3}>Thêm dự án</div>
                    </div>
                  </div>
                  <img
                    className={styles.uangleDownIcon4}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.projectParent}>
                    <div className={styles.project}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/ulistuialt.svg"
                        />
                        <div className={styles.list}>List</div>
                      </div>
                      <img
                        className={styles.downIcon5}
                        alt=""
                        src="/down.svg"
                      />
                    </div>
                    <div className={styles.project1}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/uwebgridalt.svg"
                        />
                        <div className={styles.list}>Bảng</div>
                      </div>
                      <img
                        className={styles.downIcon6}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.project2}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.list}>Lịch</div>
                      </div>
                      <img
                        className={styles.downIcon6}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.project2}>
                      <div className={styles.ulistUiAltParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.list}>Timeline</div>
                      </div>
                      <img
                        className={styles.downIcon6}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.filterGroup}>
                    <div className={styles.filter1}>
                      <div className={styles.uplusParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/usortamountup.svg"
                        />
                        <div className={styles.headerParent}>
                          <div className={styles.spXpTheo4}>Sắp xếp theo</div>
                          <div className={styles.employees}>Ngày tạo</div>
                        </div>
                      </div>
                      <img
                        className={styles.uangleDownIcon4}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                    <div className={styles.filter2}>
                      <div className={styles.uplusParent}>
                        <img
                          className={styles.usearchIcon1}
                          alt=""
                          src="/ufilter.svg"
                        />
                        <div className={styles.headerParent}>
                          <div className={styles.spXpTheo4}>Lọc theo</div>
                          <div className={styles.employees}>
                            Chưa hoàn thành
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.uangleDownIcon4}
                        alt=""
                        src="/oval-copy-3.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frameParent2}>
                <div className={styles.cardParent}>
                  <div className={styles.card} onClick={onCardContainerClick}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            E-Work - Quản lý công việc
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more.svg"
                        />
                      </div>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock.svg"
                          />
                          <div className={styles.list}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-31.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card} onClick={onCardContainer1Click}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            Lixil Ecommerces
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more1.svg"
                        />
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock1.svg"
                          />
                          <div className={styles.list}>Còn lại 20 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip1.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle1.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-32.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card} onClick={onCardContainer2Click}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            Mobishop - Sim thẻ cào
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more2.svg"
                        />
                      </div>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock2.svg"
                          />
                          <div className={styles.list}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip2.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle2.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-33.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardParent}>
                  <div className={styles.card} onClick={onCardContainer3Click}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            Travel Booking - Đặt phòng
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more.svg"
                        />
                      </div>
                      <div className={styles.tagGroup}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock3.svg"
                          />
                          <div className={styles.list}>Còn lại 20 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip3.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle3.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-31.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card} onClick={onCardContainer4Click}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            Panoee - Tạo tour 360
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more1.svg"
                        />
                      </div>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock4.svg"
                          />
                          <div className={styles.list}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip4.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle4.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-32.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.card} onClick={onCardContainer5Click}>
                    <div className={styles.frameParent3}>
                      <div className={styles.cardParent}>
                        <div className={styles.productPreviewMoParent}>
                          <div className={styles.productPreview6}>
                            E-Work - Quản lý công việc
                          </div>
                          <div className={styles.iconspaceTeam}>BU CRM</div>
                        </div>
                        <img
                          className={styles.icMoreIcon6}
                          alt=""
                          src="/ic-more2.svg"
                        />
                      </div>
                      <div className={styles.tagParent}>
                        <div className={styles.tag}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/uclock5.svg"
                          />
                          <div className={styles.list}>Còn lại 7 ngày</div>
                        </div>
                        <div className={styles.upaperclipParent}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/upaperclip5.svg"
                          />
                          <div className={styles.list}>06</div>
                        </div>
                        <div className={styles.taskProgress}>
                          <img
                            className={styles.usearchIcon1}
                            alt=""
                            src="/ucheckcircle5.svg"
                          />
                          <div className={styles.list}>7/12</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.progress}>
                      <div className={styles.parent}>
                        <div className={styles.div3}>85%</div>
                        <div className={styles.rectangleCopy6Wrapper}>
                          <div className={styles.rectangleCopy66} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.memberGroup}>
                      <div className={styles.member1}>
                        <div className={styles.avt5}>
                          <div className={styles.userpic26} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>KA</div>
                        </div>
                        <div className={styles.avt6}>
                          <div className={styles.userpic27} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>NH</div>
                        </div>
                        <div className={styles.avt7}>
                          <div className={styles.userpic28} />
                          <div className={styles.state26} />
                          <div className={styles.label4}>HN</div>
                        </div>
                        <div className={styles.avt8}>
                          <img
                            className={styles.ovalCopy37}
                            alt=""
                            src="/oval-copy-33.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.div}>+3</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tag1}>
                        <div className={styles.daysLeft1}>
                          01/11/2022 - 31/12/2022
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.component15Parent}>
                <div className={styles.component15}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon7}
                    alt=""
                    src="/chevronsleft.svg"
                  />
                  <div className={styles.div25}>1</div>
                </div>
                <div className={styles.component17}>
                  <div className={styles.component17Child} />
                  <img
                    className={styles.chevronsLeftIcon8}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.div26}>1</div>
                </div>
                <div className={styles.component18}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon8}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.div27}>2</div>
                </div>
                <div className={styles.component18}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon8}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.div27}>3</div>
                </div>
                <div className={styles.component18}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon8}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.div29}>...</div>
                </div>
                <div className={styles.component18}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon8}
                    alt=""
                    src="/oval-copy-3.svg"
                  />
                  <div className={styles.div30}>10</div>
                </div>
                <div className={styles.component22}>
                  <div className={styles.component15Child} />
                  <img
                    className={styles.chevronsLeftIcon13}
                    alt=""
                    src="/chevronsleft1.svg"
                  />
                  <div className={styles.div25}>1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini1}>
            <div className={styles.frameParent15}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon1}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div className={styles.iconButton}>
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div
                  className={styles.iconButton1}
                  onClick={onIconButtonContainer1Click}
                >
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/ufilemedicalalt1.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon1}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon1}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.dNParent}>
                <div className={styles.overview}>Dự án</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.ufolderOpenIcon1}
                      alt=""
                      src="/ufolderopen.svg"
                    />
                    <div className={styles.hmNayWrapper}>
                      <div className={styles.hmNay}>Tất cả</div>
                    </div>
                    <img
                      className={styles.ufolderOpenIcon1}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.frameParent16}>
                    <div className={styles.downParent}>
                      <img
                        className={styles.downIcon9}
                        alt=""
                        src="/down1.svg"
                      />
                      <div className={styles.uplusParent}>
                        <div className={styles.dN1}>Dự án</div>
                        <div className={styles.wrapper5}>
                          <div className={styles.dN1}>06</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent17}>
                      <div className={styles.menuFilterParent}>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>E-Work</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>CEO Loyalty</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>Mobishop</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>Lixil Ecommerce</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>Travel Booking</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                        <div className={styles.menuFilter6}>
                          <div className={styles.usearchParent}>
                            <img
                              className={styles.ulistUiAltIcon8}
                              alt=""
                              src="/ulistuialt1.svg"
                            />
                            <div className={styles.search}>Golf Manage</div>
                          </div>
                          <div className={styles.wrapper6}>
                            <div className={styles.dN1}>06</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameWrapper}>
                        <div className={styles.uplusGroup}>
                          <img
                            className={styles.ulistUiAltIcon8}
                            alt=""
                            src="/uplus2.svg"
                          />
                          <div className={styles.list}>Tạo dự án mới</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCreateNewProjectOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCreateNewProject}
        >
          <CreateNewProject onClose={closeCreateNewProject} />
        </PortalPopup>
      )}
    </>
  );
};

export default Projects;
